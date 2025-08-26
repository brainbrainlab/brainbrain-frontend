import { PaymentsCompleteRequest } from '@/pages/Payments/types';

import { apiClient } from '@/api/apiClient';

export const paymentsApi = {
  completePayments: async (data: PaymentsCompleteRequest) => {
    const response = await apiClient.post('/results', data);
    return response.json();
  },
};
