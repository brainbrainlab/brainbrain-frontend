import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { FaCheck } from 'react-icons/fa';
import { IoCheckbox, IoSquareOutline } from 'react-icons/io5';
import { useTheme } from 'styled-components';

import PageLayout from '@/components/common/PageLayout/PageLayout';

import * as S from './UserInfo.styles';

interface UserInfoData {
  email: string;
  name: string;
  age: string;
  gender: string;
  country: string;
  agreement: boolean;
}

interface UserInfoErrors {
  email?: string;
  name?: string;
  age?: string;
  gender?: string;
  country?: string;
  agreement?: string;
}

function UserInfo() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [userInfo, setUserInfo] = useState<UserInfoData>({
    email: '',
    name: '',
    age: '',
    gender: '',
    country: '',
    agreement: false,
  });

  const [errors, setErrors] = useState<UserInfoErrors>({});
  const [visibleFields, setVisibleFields] = useState<(keyof UserInfoData)[]>(['email']);
  const [isComplete, setIsComplete] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const nameTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { state } = useLocation();
  const navigate = useNavigate();
  const result = state.result;

  useEffect(() => {
    if (!result) {
      navigate('/404');
    }
  }, []);

  useEffect(() => {
    const allFieldsFilled =
      userInfo.name.trim() !== '' &&
      userInfo.age !== '' &&
      userInfo.gender !== '' &&
      userInfo.country !== '' &&
      userInfo.email.trim() !== '' &&
      userInfo.agreement === true;

    if (allFieldsFilled) {
      validateForm();
    }
  }, [userInfo]);

  // 에러 상태가 변경될 때마다 완료 상태 업데이트
  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    const allFieldsFilled =
      userInfo.name.trim() !== '' &&
      userInfo.age !== '' &&
      userInfo.gender !== '' &&
      userInfo.country !== '' &&
      userInfo.email.trim() !== '' &&
      userInfo.agreement === true;

    setIsComplete(allFieldsFilled && noErrors);
  }, [errors, userInfo]);

  // 스크롤을 다음 필드로 이동하는 함수
  const scrollToNextField = () => {
    if (formRef.current) {
      const lastVisibleField = formRef.current.lastElementChild;
      if (lastVisibleField) {
        lastVisibleField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // visibleFields가 변경될 때마다 스크롤
  useEffect(() => {
    scrollToNextField();
  }, [visibleFields]);

  const showNextField = (currentField: keyof UserInfoData) => {
    const fieldOrder: (keyof UserInfoData)[] = ['email', 'name', 'age', 'gender', 'country', 'agreement'];
    const currentIndex = fieldOrder.indexOf(currentField);
    if (currentIndex < fieldOrder.length - 1) {
      setVisibleFields(prev => [...prev, fieldOrder[currentIndex + 1]]);
    }
  };

  const validateEmail = (email: string) => {
    if (!email) {
      return t('error.emailRequired');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return t('error.emailInvalid');
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));

    if (name === 'name') {
      if (nameTimeoutRef.current) {
        clearTimeout(nameTimeoutRef.current);
      }
      nameTimeoutRef.current = setTimeout(() => {
        if (value.trim() !== '') {
          showNextField(name as keyof UserInfoData);
        }
      }, 500);
    } else if (name === 'email') {
      const emailError = validateEmail(value);
      setErrors(prev => ({ ...prev, email: emailError }));
      if (!emailError) {
        showNextField(name as keyof UserInfoData);
      }
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }));
      if (value && !errors[name as keyof UserInfoErrors]) {
        showNextField(name as keyof UserInfoData);
      }
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: checked }));
    setErrors(prev => ({ ...prev, [name]: '' }));

    if (checked) {
      showNextField('agreement');
    }
  };

  const validateForm = () => {
    const newErrors: UserInfoErrors = {};

    if (!userInfo.name) {
      newErrors.name = t('error.nameRequired');
    }

    if (!userInfo.age) {
      newErrors.age = t('error.ageRequired');
    }

    if (!userInfo.gender) {
      newErrors.gender = t('error.genderRequired');
    }

    if (!userInfo.country) {
      newErrors.country = t('error.countryRequired');
    }

    if (!userInfo.email) {
      newErrors.email = t('error.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
      newErrors.email = t('error.emailInvalid');
    }

    if (!userInfo.agreement) {
      newErrors.agreement = t('error.agreementRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 모든 필드의 유효성 검사
    const allFieldsValid = validateForm();

    if (allFieldsValid) {
      // 결제 페이지로 이동하면서 사용자 정보와 테스트 결과 전달
      navigate('/payments', {
        state: {
          userInfo,
          testResults: result,
        },
      });
    }
  };

  useEffect(() => {
    return () => {
      if (nameTimeoutRef.current) {
        clearTimeout(nameTimeoutRef.current);
      }
    };
  }, []);

  return (
    <PageLayout>
      <S.Title>테스트를 모두 완료하셨습니다!</S.Title>
      <S.Subtitle>{t('userInfo.completeSubtitle')}</S.Subtitle>
      <S.Form ref={formRef} onSubmit={handleSubmit}>
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

        {visibleFields.includes('name') && (
          <S.FormGroup $withAnimation={visibleFields.indexOf('name') !== 0}>
            <S.Label>
              {t('userInfo.name')}
              <S.Required>*</S.Required>
            </S.Label>
            <S.Input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              placeholder={t('userInfo.namePlaceholder')}
              $hasError={!!errors.name}
            />
            <S.ErrorContainer>{errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}</S.ErrorContainer>
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
              {Array.from({ length: 83 }, (_, i) => i + 18).map(age => (
                <option key={age} value={age}>
                  {age}
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
            <S.CheckboxWrapper
              onClick={() =>
                handleCheckboxChange({
                  target: { name: 'agreement', checked: !userInfo.agreement },
                } as React.ChangeEvent<HTMLInputElement>)
              }
            >
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
