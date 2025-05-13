import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

import { TFunction } from 'i18next';

import * as S from './PaymentProcess.styles';
import { FormData, FormFieldConfig } from './types';
import { PAYMENT_OPTIONS, FORM_FIELDS } from '../../constants/payment';

interface FormFieldsProps {
  plan: { id: string };
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  t: TFunction;
}

const FormField = ({
  field,
  label,
  placeholder,
  type = 'text',
  formData,
  setFormData,
  t,
}: {
  field: string;
  label: string;
  placeholder: string;
  type?: string;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  t: TFunction;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState(formData[field] || '');
  const open = useDaumPostcodePopup();

  const validateField = (name: string, value: string): string => {
    if (!value) return t('error.required');

    switch (name) {
      case FORM_FIELDS.ENGLISH_NAME:
        return /^[A-Za-z\s]*$/.test(value) ? '' : t('error.englishNameInvalid');
      case FORM_FIELDS.KOREAN_NAME:
        return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value) ? '' : t('error.koreanNameInvalid');
      case FORM_FIELDS.PHONE_NUMBER:
        return /^[0-9]*$/.test(value) ? '' : t('error.phoneNumberInvalid');
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 입력값 검증
    const errorMessage = validateField(name, value);
    setError(errorMessage);

    // 유효한 입력일 경우에만 상태 업데이트
    if (!errorMessage || errorMessage === t('error.required')) {
      let newValue = value;
      if (name === FORM_FIELDS.ENGLISH_NAME) {
        newValue = value
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
      setInputValue(newValue);
      setFormData(prev => ({ ...prev, [name]: newValue }));
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleAddressSearch = () => {
    open({
      onComplete: (data: any) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
          }
          fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        setFormData(prev => ({
          ...prev,
          [FORM_FIELDS.ADDRESS]: fullAddress,
          [FORM_FIELDS.DETAILED_ADDRESS]: '',
        }));
        setInputValue(fullAddress);
        setError('');
      },
    });
  };

  if (field === FORM_FIELDS.ADDRESS) {
    return (
      <>
        <S.FormGroup>
          <S.Label>
            {t(label)} <S.Required>*</S.Required>
          </S.Label>
          <S.AddressInputWrapper>
            <S.Input
              type={type}
              name={field}
              value={inputValue}
              placeholder={t(placeholder)}
              $hasError={error !== ''}
              readOnly
            />
            <S.AddressSearchButton type="button" onClick={handleAddressSearch}>
              {t('payment.form.searchAddress')}
            </S.AddressSearchButton>
          </S.AddressInputWrapper>
          {error && <S.ErrorMessage>{t(error, { ns: 'payment' })}</S.ErrorMessage>}
        </S.FormGroup>
        <FormField
          field={FORM_FIELDS.DETAILED_ADDRESS}
          label="payment.form.detailedAddress"
          placeholder="payment.form.detailedAddressPlaceholder"
          formData={formData}
          setFormData={setFormData}
          t={t}
        />
      </>
    );
  }

  return (
    <S.FormGroup>
      <S.Label>
        {t(label)} <S.Required>*</S.Required>
      </S.Label>
      <S.Input
        type={type}
        name={field}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
        placeholder={t(placeholder)}
        $hasError={error !== ''}
        disabled={field === FORM_FIELDS.DETAILED_ADDRESS && !formData[FORM_FIELDS.ADDRESS]}
      />
      {error && <S.ErrorMessage>{t(error, { ns: 'payment' })}</S.ErrorMessage>}
    </S.FormGroup>
  );
};

export const renderFormFields = ({ plan, formData, setFormData, t }: FormFieldsProps) => {
  const fields: Record<string, FormFieldConfig[]> = {
    [PAYMENT_OPTIONS.ONLINE.id]: [
      {
        field: FORM_FIELDS.ENGLISH_NAME,
        label: 'payment.form.englishName',
        placeholder: 'payment.form.englishNamePlaceholder',
      },
    ],
    [PAYMENT_OPTIONS.PREMIUM.id]: [
      {
        field: FORM_FIELDS.ENGLISH_NAME,
        label: 'payment.form.englishName',
        placeholder: 'payment.form.englishNamePlaceholder',
      },
      {
        field: FORM_FIELDS.KOREAN_NAME,
        label: 'payment.form.koreanName',
        placeholder: 'payment.form.koreanNamePlaceholder',
      },
      { field: FORM_FIELDS.ADDRESS, label: 'payment.form.address', placeholder: 'payment.form.addressPlaceholder' },
      {
        field: FORM_FIELDS.PHONE_NUMBER,
        label: 'payment.form.phoneNumber',
        placeholder: 'payment.form.phoneNumberPlaceholder',
        type: 'tel',
      },
    ],
  };

  const planFields = fields[plan.id];
  if (!planFields) return null;

  return planFields.map(({ field, label, placeholder, type }) => (
    <FormField
      key={field}
      field={field}
      label={label}
      placeholder={placeholder}
      type={type}
      formData={formData}
      setFormData={setFormData}
      t={t}
    />
  ));
};
