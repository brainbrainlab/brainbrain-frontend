import { PaymentsCompleteRequest } from '@/pages/Payments/types';

import { apiClient } from '@/api/apiClient';

export const paymentsApi = {
  completePayments: async (data: PaymentsCompleteRequest) => {
    return apiClient.post('/results', data);
  },
};
