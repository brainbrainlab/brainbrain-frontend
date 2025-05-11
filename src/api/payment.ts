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

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

export const completePayment = async (paymentData: PaymentRequest) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/payment/complete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Payment completion failed:', error);
    throw error;
  }
};
