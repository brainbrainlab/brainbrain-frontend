import React from 'react';
import * as S from './PaymentProcess.styles';
import { FormData, FormFieldConfig } from './types';
import { PAYMENT_OPTIONS, FORM_FIELDS } from '../../constants/payment';
import { TFunction } from 'i18next';

interface FormFieldsProps {
  plan: { id: string };
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  t: TFunction;
}

const renderFormField = (
  field: string,
  label: string,
  placeholder: string,
  type = 'text',
  formData: FormData,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>,
  t: TFunction,
) => (
  <S.FormGroup>
    <S.Label>
      {t(label)} <S.Required>*</S.Required>
    </S.Label>
    <S.Input
      type={type}
      name={field}
      value={formData[field]}
      onChange={e => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
      placeholder={t(placeholder)}
      $hasError={!!formData[field]}
    />
  </S.FormGroup>
);

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

  return planFields.map(({ field, label, placeholder, type }) =>
    renderFormField(field, label, placeholder, type, formData, setFormData, t),
  );
};
