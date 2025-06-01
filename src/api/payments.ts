import { apiClient } from '@/api/apiClient';
import { PaymentsCompleteRequest } from '@/pages/Payment/payment';

export const paymentsApi = {
  completePayments: async (data: PaymentsCompleteRequest) => {
    return apiClient.post('/api/payments/complete', data);
  },
};
