import { apiClient } from './apiClient';
import { Coupon } from './constants';

export const couponsApi = {
  getCoupons: async (code: string): Promise<Coupon> => {
    return apiClient.get<Coupon>(`/coupons?code=${code}`);
  },
};
