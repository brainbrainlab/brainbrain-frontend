import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './PaymentProcess.styles';
import Button from '../../components/Button/Button';
import {
  PAYMENT_PATHS,
  PAYMENT_WIDGET_SELECTORS,
  COUPON,
  FORM_FIELDS,
  PAYMENT_WIDGET_CONFIG,
} from '../../constants/payment';
import { PaymentProcessProps, FormData } from './types';
import { validateForm } from './validation';
import { renderFormFields } from './formFields';
import initializePayment from './paymentUtils';
import { completePayment, PaymentOption } from '../../api/payment';

const PaymentProcess = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { plan, userInfo, testResults } = location.state as PaymentProcessProps;
  const isInitializingRef = useRef(false);

  const [formData, setFormData] = useState<FormData>({
    [FORM_FIELDS.ENGLISH_NAME]: '',
    [FORM_FIELDS.KOREAN_NAME]: '',
    [FORM_FIELDS.ADDRESS]: '',
    [FORM_FIELDS.DETAILED_ADDRESS]: '',
    [FORM_FIELDS.PHONE_NUMBER]: '',
  });

  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [widgets, setWidgets] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isWidgetInitialized, setIsWidgetInitialized] = useState(false);

  // 위젯 상태 초기화
  const resetWidgetState = useCallback(() => {
    setWidgets(null);
    setIsWidgetInitialized(false);
    isInitializingRef.current = false;
  }, []);

  // 위젯 초기화
  useEffect(() => {
    if (!location.state || isInitializingRef.current) return;

    let cleanup: (() => void) | undefined;

    const init = async () => {
      isInitializingRef.current = true;
      try {
        // 이전 위젯이 있다면 먼저 정리
        if (widgets) {
          await widgets.destroy();
          setWidgets(null);
          setIsWidgetInitialized(false);
          // DOM이 완전히 정리될 때까지 대기
          await new Promise(resolve => setTimeout(resolve, 500));
        }

        cleanup = await initializePayment({
          plan,
          isCouponApplied,
          widgets: null, // 항상 null로 전달하여 새로운 위젯 생성
          setWidgets,
          setIsWidgetInitialized,
          navigate,
          t,
        });
      } catch (error) {
        console.error('Failed to initialize payment widget:', error);
        resetWidgetState();
      } finally {
        isInitializingRef.current = false;
      }
    };

    init();

    return () => {
      if (cleanup) cleanup();
      // 위젯 컨테이너 DOM 비우기 (중복 마운트 방지)
      const paymentMethodContainer = document.getElementById(PAYMENT_WIDGET_SELECTORS.PAYMENT_METHOD.slice(1));
      const agreementContainer = document.getElementById(PAYMENT_WIDGET_SELECTORS.AGREEMENT.slice(1));
      if (paymentMethodContainer) paymentMethodContainer.innerHTML = '';
      if (agreementContainer) agreementContainer.innerHTML = '';
      resetWidgetState();
    };
  }, [navigate, t, resetWidgetState]);

  // 가격이나 쿠폰 상태가 변경될 때 위젯 업데이트
  useEffect(() => {
    if (!widgets || !isWidgetInitialized || isInitializingRef.current) return;

    const updateAmount = async () => {
      try {
        await widgets.setAmount({
          currency: PAYMENT_WIDGET_CONFIG.CURRENCY,
          value: isCouponApplied ? plan.price - COUPON.AMOUNT : plan.price,
        });
      } catch (error) {
        console.error('Failed to update payment amount:', error);
        resetWidgetState();
      }
    };

    updateAmount();
  }, [plan.price, isCouponApplied, widgets, isWidgetInitialized, resetWidgetState]);

  const handlePayment = async () => {
    if (isLoading || isInitializingRef.current) return;

    if (!validateForm({ formData, plan, widgets, t }) || !isWidgetInitialized || !widgets) {
      console.error('Payment conditions not met:', {
        formValid: validateForm({ formData, plan, widgets, t }),
        isWidgetInitialized,
        hasWidgets: !!widgets,
        isLoading,
        isInitializing: isInitializingRef.current,
      });
      return;
    }

    setIsLoading(true);
    try {
      // 이전 요청이 완전히 정리될 때까지 대기
      await new Promise(resolve => setTimeout(resolve, 1000));

      const orderId = `order_${Date.now()}`;
      const amount = isCouponApplied ? plan.price - COUPON.AMOUNT : plan.price;

      const paymentResult = await widgets.requestPayment({
        orderId,
        orderName: plan.title,
        customerEmail: userInfo.email,
        customerName: userInfo.name,
        successUrl: `${window.location.origin}${PAYMENT_PATHS.SUCCESS}`,
        failUrl: `${window.location.origin}${PAYMENT_PATHS.FAIL}`,
      });

      if (!paymentResult) {
        throw new Error('Payment request failed');
      }

      // 결제 완료 후 백엔드 API 호출
      const paymentData = {
        // IQ 점수 계산 정보
        username: userInfo.name,
        email: userInfo.email,
        country: userInfo.country,
        answerSheet: testResults.answers,

        // 결제 정보
        korea_name: formData[FORM_FIELDS.KOREAN_NAME],
        english_name: formData[FORM_FIELDS.ENGLISH_NAME],
        option: plan.type as PaymentOption,
        ...(plan.type === 'FULL_PACKAGE' && {
          location: formData[FORM_FIELDS.ADDRESS],
          road_location: formData[FORM_FIELDS.DETAILED_ADDRESS]
            ? `${formData[FORM_FIELDS.ADDRESS]} ${formData[FORM_FIELDS.DETAILED_ADDRESS]}`
            : formData[FORM_FIELDS.ADDRESS],
          phone_number: formData[FORM_FIELDS.PHONE_NUMBER],
        }),

        // 쿠폰 정보
        ...(location.state.couponCode && {
          coupon_id: location.state.couponCode,
        }),
      };

      await completePayment(paymentData);

      navigate(PAYMENT_PATHS.SUCCESS, {
        state: { plan, formData, userInfo, testResults, orderId, amount },
      });
    } catch (error) {
      console.error('Payment failed:', error);
      if (error instanceof Error && error.message.includes('이미 다른 요청을 수행하고 있어요')) {
        resetWidgetState();
        setTimeout(() => {
          setIsWidgetInitialized(true);
        }, 2000);
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <S.Container>
      <S.Title>{t('payment.title')}</S.Title>
      <S.ContentWrapper>
        <div>
          <S.PlanInfo>
            <S.PlanTitle>{plan.title}</S.PlanTitle>
            <S.PlanPrice>
              {plan.price.toLocaleString()}
              {t('common.currency')}
            </S.PlanPrice>
          </S.PlanInfo>

          <S.CouponContainer>
            <S.CouponCheckbox
              type="checkbox"
              id="coupon-box"
              checked={isCouponApplied}
              onChange={e => setIsCouponApplied(e.target.checked)}
            />
            <S.CouponLabel htmlFor="coupon-box">{t('payment.coupon.apply')}</S.CouponLabel>
          </S.CouponContainer>

          <S.PaymentWidgetContainer>
            <div id={PAYMENT_WIDGET_SELECTORS.PAYMENT_METHOD.slice(1)} />
            <div id={PAYMENT_WIDGET_SELECTORS.AGREEMENT.slice(1)} />
          </S.PaymentWidgetContainer>
        </div>

        <S.Form onSubmit={e => e.preventDefault()}>
          {renderFormFields({
            formData,
            setFormData,
            plan,
            t,
          })}
          <S.ActionsContainer>
            <Button
              onClick={handlePayment}
              disabled={isLoading || !isWidgetInitialized || !validateForm({ formData, plan, widgets, t })}
            >
              {isLoading ? t('payment.processing') : t('payment.pay')}
            </Button>
          </S.ActionsContainer>
        </S.Form>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default PaymentProcess;
