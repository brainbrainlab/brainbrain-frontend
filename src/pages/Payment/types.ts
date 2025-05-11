import { TossPaymentsWidgets } from '@tosspayments/tosspayments-sdk';
import { PaymentOption } from '../../api/payment';

export interface PaymentProcessProps {
  plan: {
    id: string;
    title: string;
    price: number;
    features: string[];
    type: PaymentOption;
  };
  userInfo: {
    email: string;
    name: string;
    age: string;
    gender: string;
    country: string;
  };
  testResults: {
    answers: number[];
  };
  couponCode?: string;
}

export interface FormData {
  englishName: string;
  koreanName: string;
  address: string;
  detailedAddress: string;
  phoneNumber: string;
  englishNameError?: string;
  koreanNameError?: string;
  addressError?: string;
  detailedAddressError?: string;
  phoneNumberError?: string;
  [key: string]: string | undefined;
}

export interface FormFieldConfig {
  field: string;
  label: string;
  placeholder: string;
  type?: string;
}

export interface PaymentWidgets extends TossPaymentsWidgets {
  destroy: () => Promise<void>;
}

export interface Plan {
  id: string;
  title: string;
  price: number;
  features: string[];
  type: PaymentOption;
}
