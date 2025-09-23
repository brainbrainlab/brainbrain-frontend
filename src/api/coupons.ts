import { apiClient } from './apiClient';
import { Coupon } from './constants';

export const couponsApi = {
  getCoupons: async (code: string) => {
    const encodedCode = encodeURIComponent(code);
    return apiClient.get<Coupon>(`/coupons?code=${encodedCode}`);
  },
  useFreeCoupons: async (code: string, purchaseOption: string): Promise<string> => {
    const response = await apiClient.post(`/payments/free`, {
      couponCode: code,
      purchaseOption: purchaseOption,
    });
    const data = await response.json();

    return data.orderId;
  },
};
