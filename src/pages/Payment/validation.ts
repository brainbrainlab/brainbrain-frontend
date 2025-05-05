import { FormData } from './types';
import { validatePhoneNumber } from '../../utils/validation';
import { PAYMENT_OPTIONS, FORM_FIELDS } from '../../constants/payment';
import { TFunction } from 'i18next';

interface ValidationParams {
  formData: FormData;
  plan: { id: string };
  widgets: any;
  t: TFunction;
}

export const validateForm = ({ formData, plan, widgets, t }: ValidationParams): boolean => {
  if (!widgets) return false;

  const errors: FormData = {};
  const validateField = (field: string, message: string) => {
    if (!formData[field]) errors[field] = t(message);
  };

  const validatePhone = () => {
    if (!formData[FORM_FIELDS.PHONE_NUMBER]) {
      errors[FORM_FIELDS.PHONE_NUMBER] = t('payment.error.phoneNumberRequired');
    } else if (!validatePhoneNumber(formData[FORM_FIELDS.PHONE_NUMBER])) {
      errors[FORM_FIELDS.PHONE_NUMBER] = t('payment.error.phoneNumberInvalid');
    }
  };

  switch (plan.id) {
    case PAYMENT_OPTIONS.ONLINE.id:
      validateField(FORM_FIELDS.ENGLISH_NAME, 'payment.error.englishNameRequired');
      break;
    case PAYMENT_OPTIONS.PREMIUM.id:
      validateField(FORM_FIELDS.ENGLISH_NAME, 'payment.error.englishNameRequired');
      validateField(FORM_FIELDS.KOREAN_NAME, 'payment.error.koreanNameRequired');
      validateField(FORM_FIELDS.ADDRESS, 'payment.error.addressRequired');
      validatePhone();
      break;
  }

  return Object.keys(errors).length === 0;
};
