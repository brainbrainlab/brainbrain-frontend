import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { UserInfoDTO } from '@/pages/Payments/types'; // 유저 정보 타입 정의 파일 경로

type TestResult = (number | null)[];

interface PaymentsState {
  userInfo: UserInfoDTO | null;
  testResults: (number | null)[];
  orderId: string | null;
  paymentsResult: any | null; // PG사 응답 타입
  actions: {
    setTestResults: (results: TestResult) => void;
    setUserInfo: (info: UserInfoDTO) => void;
    setOrderId: (orderId: string) => void;
    setPaymentSuccess: (data: { orderId: string; result: any }) => void;
    getPaymentsResults: () => {
      orderId: string | null;
      userInfoRequest: UserInfoDTO | null;
      answers: TestResult;
    };
    reset: () => void;
  };
}

const initialState: Omit<PaymentsState, 'actions'> = {
  userInfo: null,
  testResults: [],
  orderId: null,
  paymentsResult: null,
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
        getPaymentsResults: () => {
          const { orderId, userInfo, testResults } = get();
          return {
            orderId,
            userInfoRequest: userInfo,
            answers: testResults,
          };
        },
        reset: () => {
          set(initialState);
        },
      },
    }),
    {
      name: 'payments-storage', // sessionStorage에 저장될 키
      storage: createJSONStorage(() => sessionStorage),
      partialize: state => Object.fromEntries(Object.entries(state).filter(([key]) => key !== 'actions')),
    },
  ),
);
