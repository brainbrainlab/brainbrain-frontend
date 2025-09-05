export const PAYMENT_OPTIONS = {
  BASIC: 'basic',
  STANDARD: 'standard',
  PREMIUM: 'premium',
} as const;

export interface Coupon {
  isAvailable: boolean;
  couponCode: string;
  couponType: 'FUNDING' | string;
  couponTarget: 'BASIC' | 'STANDARD' | 'PREMIUM' | 'ALL';
  discountRate: number;
}

export type PaymentsOptionType = (typeof PAYMENT_OPTIONS)[keyof typeof PAYMENT_OPTIONS];
