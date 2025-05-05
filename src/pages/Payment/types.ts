import { TossPaymentsWidgets } from '@tosspayments/tosspayments-sdk';

export interface PaymentProcessProps {
  plan: {
    id: string;
    title: string;
    price: number;
    features: string[];
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
  [key: string]: string;
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
