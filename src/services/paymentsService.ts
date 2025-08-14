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
  // 1. async/await 문법을 적용하고, 선택적으로 coupon 파라미터를 받도록 수정
  async requestPayments(
    amount: number,
    goodsName: string,
    coupon?: string, // 2. coupon 파라미터 추가 (선택적)
  ): Promise<PaymentsResponse> {
    try {
      // 3. 콜백 기반 API를 await로 기다릴 수 있도록 Promise로 감싸줍니다.
      const response = await new Promise<PaymentsResponse>((resolve, reject) => {
        const orderId = uuidv4(); // orderId는 결제 요청 자체에 필요하므로 여기서 생성
        usePaymentsStore.getState().actions.setOrderId(orderId);
        // 4. returnUrl을 동적으로 생성합니다.
        const returnUrl = new URL(NICE_PAY_CONFIG.RETURN_URL);
        if (coupon) {
          returnUrl.searchParams.append('coupon', coupon);
        }

        const config: NicePayConfig = {
          clientId: NICE_PAY_CONFIG.CLIENT_ID,
          method: 'all',
          orderId,
          amount,
          goodsName,
          returnUrl: returnUrl.toString(), // 생성된 URL 사용
          fnError: result => {
            // 실패 시 Promise를 reject 합니다.
            reject({ success: false, error: result.errorMsg });
          },
          fnSuccess: result => {
            // 성공 시 Promise를 resolve 합니다.
            resolve({ success: true, orderId, result });
          },
        };

        // 5. 결제 모듈 호출 시 발생할 수 있는 동기적 에러를 잡기 위해 try-catch 추가
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
