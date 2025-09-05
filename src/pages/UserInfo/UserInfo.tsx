import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { FaCheck } from 'react-icons/fa';
import { IoCheckbox, IoSquareOutline } from 'react-icons/io5';
import { useTheme } from 'styled-components';

import { usePaymentsStore } from '@/stores/paymentsStore';

import { UserInfoDTO } from '@/pages/Payments/types';

import PageLayout from '@/components/common/PageLayout/PageLayout';

import * as S from './UserInfo.styles';

const FIELD_ORDER = [
  'email',
  'koreanName',
  'englishName',
  'age',
  'gender',
  'country',
  'agreement',
  'firstName',
  'lastName',
] as const;
type FieldOrderType = (typeof FIELD_ORDER)[number];

type UserInfoField = keyof UserInfoDTO;
type UserInfoErrors = { [key in UserInfoField]?: string };

const INITIAL_USER_INFO: UserInfoDTO = {
  email: '',
  koreanName: '',
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  country: '',
  agreement: false,
};

const INITIAL_ERRORS: UserInfoErrors = {
  email: '',
  koreanName: '',
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  country: '',
  agreement: '',
};

function UserInfo() {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfoDTO>(INITIAL_USER_INFO);
  const [errors, setErrors] = useState<UserInfoErrors>(INITIAL_ERRORS);
  const [visibleFields, setVisibleFields] = useState<FieldOrderType[]>(['email']);
  const [isComplete, setIsComplete] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const nameTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const storeUserInfo = usePaymentsStore(state => state.actions.setUserInfo);
  const result = usePaymentsStore(state => state.testResults);

  useEffect(() => {
    if (!result) {
      navigate('/404');
    }
  }, [result, navigate]);

  useEffect(() => {
    const noErrors = Object.values(errors).every(error => !error);
    const allFieldsFilled =
      userInfo.koreanName.trim() !== '' &&
      userInfo.firstName.trim() !== '' &&
      userInfo.lastName.trim() !== '' &&
      userInfo.age !== '' &&
      userInfo.gender !== '' &&
      userInfo.country !== '' &&
      userInfo.email.trim() !== '' &&
      userInfo.agreement;

    setIsComplete(allFieldsFilled && noErrors);
  }, [errors, userInfo]);

  useEffect(() => {
    const scrollToLastField = () => {
      if (formRef.current) {
        formRef.current.lastElementChild?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
    scrollToLastField();
  }, [visibleFields]);

  useEffect(() => {
    return () => {
      if (nameTimeoutRef.current) {
        clearTimeout(nameTimeoutRef.current);
      }
    };
  }, []);

  const showNextField = (currentField: FieldOrderType) => {
    const currentIndex = FIELD_ORDER.indexOf(currentField);
    if (currentIndex < FIELD_ORDER.length - 1) {
      const nextField = FIELD_ORDER[currentIndex + 1];
      setVisibleFields(prev => (prev.includes(nextField) ? prev : [...prev, nextField]));
    }
  };

  const validateField = (name: UserInfoField, value: any): string => {
    switch (name) {
      case 'email':
        if (!value) return t('error.emailRequired');
        if (
          !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            value,
          )
        )
          return t('error.emailInvalid');
        return '';

      case 'koreanName': {
        const trimmedValue = value.trim();
        if (!trimmedValue) return t('error.nameRequired');
        if (trimmedValue.length > 20) return t('error.koreanNameLength');
        if (!/^[가-힣]+$/.test(trimmedValue)) return t('error.koreanNameFormat');
        return '';
      }

      case 'lastName': {
        const trimmedValue = value.trim();
        if (!trimmedValue) return t('error.nameRequired');
        if (trimmedValue.length > 8) return t('error.lastNameLength');
        if (!/^[a-zA-Z\s]+$/.test(trimmedValue)) return t('error.englishNameFormat');
        return '';
      }

      case 'firstName': {
        const trimmedValue = value.trim();
        if (!trimmedValue) return t('error.nameRequired');
        if (trimmedValue.length > 15) return t('error.firstNameLength');
        if (!/^[a-zA-Z\s]+$/.test(trimmedValue)) return t('error.englishNameFormat');
        return '';
      }
      case 'age':
      case 'gender':
      case 'country':
        return value ? '' : t(`error.${name}Required`);

      case 'agreement':
        return value ? '' : t('error.agreementRequired');

      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // 1. e.target에서 name, value 외에 type도 가져옵니다.
    const { name, value, type } = e.target as { name: UserInfoField; value: string; type: string };

    setUserInfo(prev => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));

    if (nameTimeoutRef.current) clearTimeout(nameTimeoutRef.current);

    // 에러가 없을 때만 다음 필드를 보여줍니다.
    if (!error) {
      // 2. input의 type이 'text' 또는 'email'인 경우에만 setTimeout을 적용합니다.
      if (type === 'text' || type === 'email') {
        nameTimeoutRef.current = setTimeout(() => {
          if (name === 'firstName' || name === 'lastName') {
            const otherName = name === 'firstName' ? 'lastName' : 'firstName';
            if (userInfo[otherName] && !validateField(otherName, userInfo[otherName])) {
              showNextField('englishName');
            }
          } else {
            showNextField(name);
          }
        }, 500);
      } else {
        // 3. 그 외의 경우(select, radio 등)는 즉시 다음 필드를 보여줍니다.
        showNextField(name);
      }
    }
  };

  const handleCheckboxChange = () => {
    const newCheckedValue = !userInfo.agreement;
    setUserInfo(prev => ({ ...prev, agreement: newCheckedValue }));

    const error = validateField('agreement', newCheckedValue);
    setErrors(prev => ({ ...prev, agreement: error }));

    if (newCheckedValue) {
      showNextField('agreement');
    }
  };

  // --- 리팩터링: validateForm은 에러 객체만 반환하도록 역할 축소 ---
  const validateForm = (data: UserInfoDTO): UserInfoErrors => {
    const newErrors: UserInfoErrors = {};
    (Object.keys(data) as UserInfoField[]).forEach(key => {
      const error = validateField(key, data[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    return newErrors;
  };

  // --- 리팩터링: handleSubmit에서 유효성 검사 결과에 따른 모든 처리 담당 ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(userInfo);
    const isFormValid = Object.keys(validationErrors).length === 0;

    if (isFormValid) {
      storeUserInfo(userInfo);
      navigate('/payments');
    } else {
      // 제출 시 모든 필드를 보여주고, 에러 상태를 업데이트합니다.
      setVisibleFields([...FIELD_ORDER]);
      setErrors(validationErrors);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <PageLayout>
      <S.Title>테스트를 모두 완료하셨습니다!</S.Title>
      <S.Subtitle>{t('userInfo.completeSubtitle')}</S.Subtitle>
      <S.Form ref={formRef} onSubmit={handleSubmit} noValidate onKeyDown={handleKeyDown}>
        {/* 각 필드 렌더링... (JSX는 동일하므로 생략) */}
        {/* ...기존 JSX 코드... */}
        {visibleFields.includes('email') && (
          <S.FormGroup $withAnimation={visibleFields.indexOf('email') !== 0}>
            <S.Label>
              {t('userInfo.email')}
              <S.Required>*</S.Required>
            </S.Label>
            <S.Input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              placeholder={t('userInfo.emailPlaceholder')}
              $hasError={!!errors.email}
            />
            <S.ErrorContainer>{errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}</S.ErrorContainer>
          </S.FormGroup>
        )}

        {visibleFields.includes('koreanName') && (
          <S.FormGroup $withAnimation={visibleFields.indexOf('koreanName') !== 0}>
            <S.Label>
              {t('userInfo.koreanName')}
              <S.Required>*</S.Required>
            </S.Label>
            <S.Input
              type="text"
              name="koreanName"
              value={userInfo.koreanName}
              onChange={handleChange}
              placeholder={t('userInfo.koreanNamePlaceholder')}
              $hasError={!!errors.koreanName}
            />
            <S.ErrorContainer>
              {errors.koreanName && <S.ErrorMessage>{errors.koreanName}</S.ErrorMessage>}
            </S.ErrorContainer>
          </S.FormGroup>
        )}
        {visibleFields.includes('englishName') && ( // firstName을 기준으로 렌더링
          <S.FormGroup $withAnimation>
            {/* 두 입력을 묶는 공통 라벨 */}

            <S.InputRow>
              {/* First Name 입력 그룹 */}
              <S.InputGroup>
                <S.Label>
                  {t('userInfo.englishFirstName')}
                  <S.Required>*</S.Required>
                </S.Label>
                <S.Input
                  type="text"
                  name="firstName"
                  value={userInfo.firstName}
                  onChange={handleChange}
                  placeholder={t('userInfo.englishFirstNamePlaceholder')} // "First name"
                  $hasError={!!errors.firstName}
                />
                <S.ErrorContainer>
                  {errors.firstName && <S.ErrorMessage>{errors.firstName}</S.ErrorMessage>}
                </S.ErrorContainer>
              </S.InputGroup>

              {/* Last Name 입력 그룹 */}
              <S.InputGroup>
                <S.Label>
                  {t('userInfo.englishLastName')}
                  <S.Required>*</S.Required>
                </S.Label>
                <S.Input
                  type="text"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleChange}
                  placeholder={t('userInfo.englishLastNamePlaceholder')} // "Last name"
                  $hasError={!!errors.lastName}
                />
                <S.ErrorContainer>
                  {errors.lastName && <S.ErrorMessage>{errors.lastName}</S.ErrorMessage>}
                </S.ErrorContainer>
              </S.InputGroup>
            </S.InputRow>
          </S.FormGroup>
        )}

        {visibleFields.includes('age') && (
          <S.FormGroup $withAnimation={visibleFields.indexOf('age') !== 0}>
            <S.Label>
              {t('userInfo.age')}
              <S.Required>*</S.Required>
            </S.Label>
            <S.Select name="age" value={userInfo.age} onChange={handleChange} $hasError={!!errors.age}>
              <option value="" disabled>
                {t('userInfo.agePlaceholder')}
              </option>
              {Array.from({ length: 8 }, (_, i) => (i + 1) * 10).map(age => (
                <option key={age} value={age}>
                  {`${age}~${age + 9}`}
                </option>
              ))}
            </S.Select>
            <S.ErrorContainer>{errors.age && <S.ErrorMessage>{errors.age}</S.ErrorMessage>}</S.ErrorContainer>
          </S.FormGroup>
        )}

        {visibleFields.includes('gender') && (
          <S.FormGroup $withAnimation={visibleFields.indexOf('gender') !== 0}>
            <S.Label>
              {t('userInfo.gender')}
              <S.Required>*</S.Required>
            </S.Label>
            <S.RadioGroup>
              {[
                { value: 'male', label: t('userInfo.genderOptions.male') },
                { value: 'female', label: t('userInfo.genderOptions.female') },
                { value: 'other', label: t('userInfo.genderOptions.other') },
              ].map(option => (
                <S.RadioLabel key={option.value}>
                  <S.RadioInput
                    type="radio"
                    name="gender"
                    value={option.value}
                    checked={userInfo.gender === option.value}
                    onChange={handleChange}
                  />
                  <S.RadioButton $isChecked={userInfo.gender === option.value}>
                    <FaCheck color="white" size={10} />
                  </S.RadioButton>
                  {option.label}
                </S.RadioLabel>
              ))}
            </S.RadioGroup>
            <S.ErrorContainer>{errors.gender && <S.ErrorMessage>{errors.gender}</S.ErrorMessage>}</S.ErrorContainer>
          </S.FormGroup>
        )}

        {visibleFields.includes('country') && (
          <S.FormGroup $withAnimation={visibleFields.indexOf('country') !== 0}>
            <S.Label>
              {t('userInfo.country.label')}
              <S.Required>*</S.Required>
            </S.Label>
            <S.Select name="country" value={userInfo.country} onChange={handleChange} $hasError={!!errors.country}>
              <option value="" disabled>
                {t('userInfo.country.placeholder')}
              </option>
              <option value="kr">{t('userInfo.country.options.kr')}</option>
              <option value="us">{t('userInfo.country.options.us')}</option>
              <option value="jp">{t('userInfo.country.options.jp')}</option>
              <option value="cn">{t('userInfo.country.options.cn')}</option>
              <option value="other">{t('userInfo.country.options.other')}</option>
            </S.Select>
            <S.ErrorContainer>{errors.country && <S.ErrorMessage>{errors.country}</S.ErrorMessage>}</S.ErrorContainer>
          </S.FormGroup>
        )}

        {visibleFields.includes('agreement') && (
          <S.AgreementGroup $withAnimation={visibleFields.indexOf('agreement') !== 0}>
            <S.CheckboxWrapper onClick={handleCheckboxChange}>
              {userInfo.agreement ? (
                <IoCheckbox size={24} color={theme.color.primary[500]} />
              ) : (
                <IoSquareOutline size={24} color={theme.color.black[400]} />
              )}
              <S.AgreementLabel>
                <S.AgreementLink href="/privacy" target="_blank" onClick={e => e.stopPropagation()}>
                  {t('common.privacyPolicy')}
                </S.AgreementLink>
                &nbsp;{t('common.and')}&nbsp;
                <S.AgreementLink href="/terms" target="_blank" onClick={e => e.stopPropagation()}>
                  {t('common.termsOfService')}
                </S.AgreementLink>
                {t('userInfo.agreement')}
                <S.Required>*</S.Required>
              </S.AgreementLabel>
            </S.CheckboxWrapper>
            <S.ErrorContainer>
              {errors.agreement && <S.ErrorMessage>{errors.agreement}</S.ErrorMessage>}
            </S.ErrorContainer>
          </S.AgreementGroup>
        )}

        {isComplete && <S.SubmitButton $withAnimation>{t('userInfo.submit')}</S.SubmitButton>}
      </S.Form>
    </PageLayout>
  );
}

export default UserInfo;
