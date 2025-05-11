import { loadTossPayments } from '@tosspayments/tosspayments-sdk';
import { PAYMENT_PATHS, PAYMENT_WIDGET_CONFIG, PAYMENT_WIDGET_SELECTORS, COUPON } from '../../constants/payment';
import { TFunction } from 'i18next';
import { PaymentWidgets } from './types';

interface InitializePaymentParams {
  plan: { price: number };
  isCouponApplied: boolean;
  widgets: PaymentWidgets | null;
  setWidgets: (widgets: PaymentWidgets | null) => void;
  setIsWidgetInitialized: (value: boolean) => void;
  navigate: (path: string, options?: any) => void;
  t: TFunction;
}

const initializePayment = async ({
  plan,
  isCouponApplied,
  widgets,
  setWidgets,
  setIsWidgetInitialized,
  navigate,
  t,
}: InitializePaymentParams) => {
  let isMounted = true;
  let currentWidgets: PaymentWidgets | null = null;

  const cleanup = async () => {
    if (!isMounted) return;

    try {
      if (currentWidgets) {
        await currentWidgets.destroy();
        currentWidgets = null;
      }

      const paymentMethodContainer = document.getElementById(PAYMENT_WIDGET_SELECTORS.PAYMENT_METHOD.slice(1));
      const agreementContainer = document.getElementById(PAYMENT_WIDGET_SELECTORS.AGREEMENT.slice(1));

      if (paymentMethodContainer) paymentMethodContainer.innerHTML = '';
      if (agreementContainer) agreementContainer.innerHTML = '';

      // DOM이 완전히 정리될 때까지 대기
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Error during cleanup:', error);
    }
  };

  try {
    // 이전 위젯 정리
    await cleanup();

    if (!isMounted) return;

    const clientKey = process.env.TOSS_CLIENT_KEY || 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
    const tossPayments = await loadTossPayments(clientKey);

    if (!tossPayments) throw new Error('Failed to initialize Toss Payments');

    if (!isMounted) return;

    // 새로운 위젯 인스턴스 생성
    currentWidgets = tossPayments.widgets({
      customerKey: PAYMENT_WIDGET_CONFIG.CUSTOMER_KEY,
    }) as PaymentWidgets;

    if (!isMounted) return;

    // 위젯 상태 업데이트
    setWidgets(currentWidgets);

    // 금액 설정
    await currentWidgets.setAmount({
      currency: PAYMENT_WIDGET_CONFIG.CURRENCY,
      value: isCouponApplied ? plan.price - COUPON.AMOUNT : plan.price,
    });

    if (!isMounted) return;

    // 결제 수단 위젯 렌더링
    await currentWidgets.renderPaymentMethods({
      selector: PAYMENT_WIDGET_SELECTORS.PAYMENT_METHOD,
      variantKey: PAYMENT_WIDGET_CONFIG.VARIANT_KEY.PAYMENT_METHODS,
    });

    if (!isMounted) return;

    // 약관 동의 위젯 렌더링
    await currentWidgets.renderAgreement({
      selector: PAYMENT_WIDGET_SELECTORS.AGREEMENT,
      variantKey: PAYMENT_WIDGET_CONFIG.VARIANT_KEY.AGREEMENT,
    });

    if (!isMounted) return;

    // 위젯 초기화 완료
    setIsWidgetInitialized(true);
  } catch (error) {
    console.error('Failed to initialize payment widget:', error);

    if (isMounted) {
      await cleanup();
      navigate(PAYMENT_PATHS.FAIL, {
        state: { error: error instanceof Error ? error.message : t('payment.error.unknown') },
      });
    }
  }

  return () => {
    isMounted = false;
    cleanup();
  };
};

export default initializePayment;
