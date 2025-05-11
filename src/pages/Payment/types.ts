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

export interface Plan {
  id: string;
  title: string;
  price: number;
  features: string[];
  type: PaymentOption;
}
