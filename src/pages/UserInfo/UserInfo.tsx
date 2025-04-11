import React, { useState, useEffect, useRef } from 'react';
import * as S from './UserInfo.styles';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import Button from '../../components/Button/Button';
import { useTheme } from 'styled-components';

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
      return '이메일을 입력해주세요.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return '올바른 이메일 형식이 아닙니다.';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));

    // 이름 필드인 경우 디바운스 적용
    if (name === 'name') {
      // 이전 타이머 취소
      if (nameTimeoutRef.current) {
        clearTimeout(nameTimeoutRef.current);
      }
      // 새로운 타이머 설정
      nameTimeoutRef.current = setTimeout(() => {
        if (value.trim() !== '') {
          showNextField(name as keyof UserInfoData);
        }
      }, 500);
    }
    // 이메일 필드인 경우 실시간 검증
    else if (name === 'email') {
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
      newErrors.name = '이름을 입력해주세요.';
    }

    if (!userInfo.age) {
      newErrors.age = '나이를 선택해주세요.';
    }

    if (!userInfo.gender) {
      newErrors.gender = '성별을 선택해주세요.';
    }

    if (!userInfo.country) {
      newErrors.country = '국가를 선택해주세요.';
    }

    if (!userInfo.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }

    if (!userInfo.agreement) {
      newErrors.agreement = '개인정보처리방침에 동의해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 현재 보이는 필드들의 값이 모두 유효한지 확인
    const currentFieldsValid = visibleFields.every(field => {
      if (field === 'email') {
        const emailError = validateEmail(userInfo.email);
        if (emailError) {
          setErrors(prev => ({ ...prev, email: emailError }));
          return false;
        }
        return true;
      }
      if (field === 'agreement') {
        if (!userInfo.agreement) {
          setErrors(prev => ({ ...prev, agreement: '개인정보처리방침에 동의해주세요.' }));
          return false;
        }
        return true;
      }
      if (!userInfo[field] || userInfo[field].trim() === '') {
        setErrors(prev => ({
          ...prev,
          [field]: `${
            field === 'age' ? '나이를' : field === 'name' ? '이름을' : field === 'gender' ? '성별을' : '국가를'
          } ${field === 'age' || field === 'gender' || field === 'country' ? '선택해주세요.' : '입력해주세요.'}`,
        }));
        return false;
      }
      return true;
    });

    // 현재 필드가 유효하면 다음 필드 표시
    if (currentFieldsValid) {
      const lastVisibleField = visibleFields[visibleFields.length - 1];
      if (lastVisibleField && lastVisibleField !== 'agreement') {
        showNextField(lastVisibleField);
      }
    }

    // 모든 필드가 표시되고 모두 유효하면 제출
    const allFieldsVisible = visibleFields.length === 6;
    if (allFieldsVisible && currentFieldsValid) {
      console.log('Form submitted:', userInfo);
    }
  };

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (nameTimeoutRef.current) {
        clearTimeout(nameTimeoutRef.current);
      }
    };
  }, []);

  return (
    <S.Container>
      <S.Title>테스트를 모두 완료하셨습니다!</S.Title>
      <S.Subtitle>
        입력하신 이메일로 인증서와 보고서를 발송해 드립니다. <br /> 모든 정보를 정확히 입력해주세요.
      </S.Subtitle>
      <S.Form ref={formRef} onSubmit={handleSubmit}>
        {visibleFields.includes('email') && (
          <S.FormGroup>
            <S.Label>
              이메일<S.Required>*</S.Required>
            </S.Label>
            <S.Input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              placeholder="you@example.com"
              hasError={!!errors.email}
            />
            <S.ErrorContainer>{errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}</S.ErrorContainer>
          </S.FormGroup>
        )}

        {visibleFields.includes('name') && (
          <S.FormGroup>
            <S.Label>
              이름<S.Required>*</S.Required>
            </S.Label>
            <S.Input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              hasError={!!errors.name}
              placeholder="홍길동"
            />
            <S.ErrorContainer>{errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}</S.ErrorContainer>
          </S.FormGroup>
        )}

        {visibleFields.includes('age') && (
          <S.FormGroup>
            <S.Label>
              나이<S.Required>*</S.Required>
            </S.Label>
            <S.Select name="age" value={userInfo.age} onChange={handleChange} hasError={!!errors.age}>
              <option value="" disabled>
                나이를 선택해주세요
              </option>
              <option value="0-19">0 - 19</option>
              <option value="20-29">20 - 29</option>
              <option value="30-39">30 - 39</option>
              <option value="40-49">40 - 49</option>
              <option value="50-59">50 - 59</option>
              <option value="60-69">60 - 69</option>
              <option value="70+">70+</option>
            </S.Select>
            <S.ErrorContainer>{errors.age && <S.ErrorMessage>{errors.age}</S.ErrorMessage>}</S.ErrorContainer>
          </S.FormGroup>
        )}

        {visibleFields.includes('gender') && (
          <S.FormGroup>
            <S.Label>
              성별<S.Required>*</S.Required>
            </S.Label>
            <S.RadioGroup>
              {[
                { value: 'male', label: '남자' },
                { value: 'female', label: '여자' },
                { value: 'other', label: '기타/밝히고 싶지 않음' },
              ].map(option => (
                <S.RadioLabel key={option.value}>
                  <S.RadioInput
                    type="radio"
                    name="gender"
                    value={option.value}
                    checked={userInfo.gender === option.value}
                    onChange={handleChange}
                  />
                  <S.RadioButton isChecked={userInfo.gender === option.value}>
                    <BsCheckCircleFill />
                  </S.RadioButton>
                  {option.label}
                </S.RadioLabel>
              ))}
            </S.RadioGroup>
            <S.ErrorContainer>{errors.gender && <S.ErrorMessage>{errors.gender}</S.ErrorMessage>}</S.ErrorContainer>
          </S.FormGroup>
        )}

        {visibleFields.includes('country') && (
          <S.FormGroup>
            <S.Label>
              국가<S.Required>*</S.Required>
            </S.Label>
            <S.Select name="country" value={userInfo.country} onChange={handleChange} hasError={!!errors.country}>
              <option value="" disabled>
                국가를 선택해주세요
              </option>
              <option value="KR">대한민국</option>
              <option value="US">미국</option>
              <option value="JP">일본</option>
              <option value="CN">중국</option>
              <option value="other">기타</option>
            </S.Select>
            <S.ErrorContainer>{errors.country && <S.ErrorMessage>{errors.country}</S.ErrorMessage>}</S.ErrorContainer>
          </S.FormGroup>
        )}

        {visibleFields.includes('agreement') && (
          <S.AgreementGroup>
            <S.CheckboxWrapper
              onClick={() =>
                handleCheckboxChange({
                  target: { name: 'agreement', checked: !userInfo.agreement },
                } as React.ChangeEvent<HTMLInputElement>)
              }
            >
              {userInfo.agreement ? (
                <IoCheckboxOutline size={24} color={theme.color.primary[500]} />
              ) : (
                <IoSquareOutline size={24} color={theme.color.black[400]} />
              )}
              <S.AgreementLabel>
                개인정보처리방침 및 서비스 이용약관에 동의합니다.<S.Required>*</S.Required>
              </S.AgreementLabel>
            </S.CheckboxWrapper>
            <S.ErrorContainer>
              {errors.agreement && <S.ErrorMessage>{errors.agreement}</S.ErrorMessage>}
            </S.ErrorContainer>
          </S.AgreementGroup>
        )}

        <Button type="submit">결과 받기</Button>
      </S.Form>
    </S.Container>
  );
}

export default UserInfo;
