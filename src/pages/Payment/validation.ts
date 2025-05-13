import { TFunction } from 'i18next';

import { FormData } from './types';
import { PAYMENT_OPTIONS, FORM_FIELDS } from '../../constants/payment';
import { validatePhoneNumber } from '../../utils/validation';

interface ValidationParams {
  formData: FormData;
  plan: { id: string };
  widgets: any;
  t: TFunction;
}

type ValidationErrors = Partial<Record<keyof FormData, string>>;

export const validateForm = ({ formData, plan, widgets, t }: ValidationParams): boolean => {
  if (!widgets) return false;

  const errors: ValidationErrors = {};
  const validateField = (field: string, message: string) => {
    if (!formData[field]) errors[field] = t(message);
  };

  const validatePhone = () => {
    if (!formData[FORM_FIELDS.PHONE_NUMBER]) {
      errors[FORM_FIELDS.PHONE_NUMBER] = t('error.phoneNumberRequired');
    } else if (!validatePhoneNumber(formData[FORM_FIELDS.PHONE_NUMBER])) {
      errors[FORM_FIELDS.PHONE_NUMBER] = t('error.phoneNumberInvalid');
    }
  };

  switch (plan.id) {
    case PAYMENT_OPTIONS.ONLINE.id:
      validateField(FORM_FIELDS.ENGLISH_NAME, 'error.englishNameRequired');
      break;
    case PAYMENT_OPTIONS.PREMIUM.id:
      validateField(FORM_FIELDS.ENGLISH_NAME, 'error.englishNameRequired');
      validateField(FORM_FIELDS.KOREAN_NAME, 'error.koreanNameRequired');
      validateField(FORM_FIELDS.ADDRESS, 'error.addressRequired');
      validatePhone();
      break;
  }

  return Object.keys(errors).length === 0;
};
