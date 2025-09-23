import { v4 as uuidv4 } from 'uuid';

import { usePaymentsStore } from '@/stores/paymentsStore';

import { NICE_PAY_CONFIG, NicePayConfig, PaymentsResponse } from '@/types/payment';

declare global {
  interface Window {
    AUTHNICE: {
      requestPay: (config: NicePayConfig) => void;
    };
  }
}

export const paymentsService = {
  async requestPayments(amount: number, goodsName: string, coupon?: string): Promise<PaymentsResponse> {
    try {
      const response = await new Promise<PaymentsResponse>((resolve, reject) => {
        const orderId = uuidv4();
        usePaymentsStore.getState().actions.setOrderId(orderId);
        const returnUrl = new URL(NICE_PAY_CONFIG.RETURN_URL);

        if (coupon) {
          returnUrl.searchParams.append('coupon', coupon);
        }
        console.log(returnUrl);
        const config: NicePayConfig = {
          clientId: NICE_PAY_CONFIG.CLIENT_ID,
          method: 'all',
          orderId,
          amount,
          goodsName,
          returnUrl: returnUrl.toString(),
          fnError: result => {
            reject({ success: false, error: result.errorMsg });
          },
          fnSuccess: result => {
            resolve({ success: true, orderId, result });
          },
        };

        try {
          window.AUTHNICE.requestPay(config);
        } catch {
          reject({ success: false, error: '결제 모듈을 호출하는 중 오류가 발생했습니다.' });
        }
      });

      return response;
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'error' in error) {
        throw error;
      }
      throw { success: false, error: '결제 요청 중 알 수 없는 오류가 발생했습니다.' };
    }
  },
};
