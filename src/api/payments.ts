import { PaymentsCompleteRequest } from '@/pages/Payments/types';

import { apiClient } from '@/api/apiClient';

export const paymentsApi = {
  completePayments: async (data: PaymentsCompleteRequest) => {
    const response = await apiClient.post('/results', data);

    const responseText = await response.text();

    if (!responseText) {
      return null;
    }
    return JSON.parse(responseText);
  },
};
