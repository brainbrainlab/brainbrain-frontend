import { PaymentsOptionType } from '@/api/constants';

export interface PaymentsProcessProps {
  userInfo: UserInfo;
  testResults: TestResults;
}

export interface Plan {
  id: PaymentsOptionType;
  title: string;
  price: number;
  features: string[];
  isBest?: boolean;
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

export interface PaymentsOption {
  readonly id: 'basic' | 'standard' | 'premium';
  readonly title: string;
  readonly price: number;
  readonly features: readonly string[];
  readonly isBest: boolean;
}

export interface PaymentsCompleteRequest {
  orderId: string;
  userInfo: UserInfo;
  testResults: TestResults;
}

export interface PaymentsRequest {
  // IQ 점수 계산 정보
  username: string;
  email: string;
  country: string;
  answerSheet: number[];

  // 결제 정보
  korea_name: string;
  english_name: string;
  option: PaymentsOption;
  location?: string;
  road_location?: string;
  phone_number?: string;

  // 쿠폰 정보
  coupon_id?: string;
}

export interface UserInfo {
  email: string;
  name: string;
  age: string;
  gender: string;
  country: string;
  agreement: boolean;
}

export interface TestResults {
  answers: number[];
}

export interface PaymentsInfo {
  planId: string;
  amount: number;
}

export interface PaymentsCompleteRequest {
  orderId: string;
  userInfo: UserInfo;
  testResults: TestResults;
  paymentsInfo: PaymentsInfo;
}
