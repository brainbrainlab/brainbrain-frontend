export interface NicePayConfig {
  clientId: string;
  method: string;
  orderId: string | number;
  amount: number;
  goodsName: string;
  returnUrl: string;
  fnError?: (result: { errorMsg: string }) => void;
  fnSuccess?: (result: any) => void;
}

export interface PaymentsResponse {
  success: boolean;
  orderId?: string;
  error?: string;
  result?: any;
}

export const NICE_PAY_CONFIG = {
  CLIENT_ID: process.env.REACT_APP_NICE_PAY_CLIENT_ID || '',
  RETURN_URL: process.env.REACT_APP_API_BASE_URL + '/payments/confirm',
} as const;
