// paymentsStore.ts 파일

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { ShippingInfoDTO, UserInfoDTO } from '@/pages/Payments/types';

type TestResult = (number | null)[];

interface PaymentsState {
  userInfo: UserInfoDTO | null;
  testResults: (number | null)[];
  orderId: string | null;
  paymentsResult: any | null;
  shippingInfo: ShippingInfoDTO | null;
  actions: {
    setTestResults: (results: TestResult) => void;
    setUserInfo: (info: UserInfoDTO) => void;
    setOrderId: (orderId: string) => void;
    setPaymentSuccess: (data: { orderId: string; result: any }) => void;
    setShippingInfo: (info: ShippingInfoDTO) => void;
    getPaymentsResults: () => {
      orderId: string | null;
      userInfoRequest: UserInfoDTO | null;
      answers: TestResult;
      shippingInfoRequest: ShippingInfoDTO | null;
    };
    reset: () => void;
  };
}

const initialState: Omit<PaymentsState, 'actions'> = {
  userInfo: null,
  testResults: [],
  orderId: null,
  paymentsResult: null,
  shippingInfo: null,
};

export const usePaymentsStore = create<PaymentsState>()(
  persist(
    (set, get) => ({
      ...initialState,
      actions: {
        setTestResults: results => set({ testResults: results }),
        setUserInfo: info => set({ userInfo: info }),
        setOrderId: (orderId: string) => set({ orderId }),
        setPaymentSuccess: data => set({ orderId: data.orderId, paymentsResult: data.result }),
        setShippingInfo: info => set({ shippingInfo: info }),
        getPaymentsResults: () => {
          const { orderId, userInfo, testResults, shippingInfo } = get();
          return {
            orderId,
            userInfoRequest: userInfo,
            answers: testResults,
            shippingInfoRequest: shippingInfo,
          };
        },
        reset: () => {
          set(initialState);
        },
      },
    }),
    {
      name: 'payments-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: state => Object.fromEntries(Object.entries(state).filter(([key]) => key !== 'actions')),
    },
  ),
);
