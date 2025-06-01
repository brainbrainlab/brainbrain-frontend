import { v4 as uuidv4 } from 'uuid';

import { NICE_PAY_CONFIG, NicePayConfig, PaymentsResponse } from '@/types/payment';

declare global {
  interface Window {
    AUTHNICE: {
      requestPay: (config: NicePayConfig) => void;
    };
  }
}

export const paymentsService = {
  requestPayments: (amount: number, goodsName: string): Promise<PaymentsResponse> => {
    return new Promise((resolve, reject) => {
      try {
        const orderId = uuidv4();
        const config: NicePayConfig = {
          clientId: NICE_PAY_CONFIG.CLIENT_ID,
          method: 'all',
          orderId,
          amount,
          goodsName,
          returnUrl: NICE_PAY_CONFIG.RETURN_URL,
          fnError: result => {
            reject({ success: false, error: result.errorMsg });
          },
          fnSuccess: result => {
            resolve({ success: true, orderId, result });
          },
        };

        // 결제 요청 후 결과를 기다림
        window.AUTHNICE.requestPay(config);
      } catch (error) {
        reject({ success: false, error: '결제 요청 중 오류가 발생했습니다.' });
      }
    });
  },
};
