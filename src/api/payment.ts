import { apiClient } from './apiClient';

export type PaymentOption = 'SCORE_ONLY' | 'ONLINE_CERT' | 'FULL_PACKAGE';

export interface PaymentRequest {
  // IQ 점수 계산 정보
  username: string;
  email: string;
  country: string;
  answerSheet: number[];

  // 결제 정보
  korea_name: string;
  english_name: string;
  option: PaymentOption;
  location?: string;
  road_location?: string;
  phone_number?: string;

  // 쿠폰 정보
  coupon_id?: string;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  data?: {
    paymentId: string;
    amount: number;
    status: string;
  };
}

export const completePayment = (paymentData: PaymentRequest) => {
  return apiClient.post<PaymentResponse, PaymentRequest>('/api/payment/complete', paymentData);
};
