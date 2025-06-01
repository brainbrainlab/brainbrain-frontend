export const PAYMENT_OPTIONS = {
  BASIC: 'basic',
  STANDARD: 'standard',
  PREMIUM: 'premium',
} as const;

export type PaymentsOptionType = (typeof PAYMENT_OPTIONS)[keyof typeof PAYMENT_OPTIONS];
