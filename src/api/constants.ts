export const PAYMENT_OPTIONS = {
  BASIC: 'basic',
  STANDARD: 'standard',
  PREMIUM: 'premium',
} as const;

export interface Coupon {
  couponCode: string;
  couponType: 'FUNDING' | string;
  couponTarget: 'BASIC' | 'STANDARD' | 'PREMIUM' | 'ALL';
  discountRate: number;
  isAvailable: boolean;
}

export type PaymentsOptionType = (typeof PAYMENT_OPTIONS)[keyof typeof PAYMENT_OPTIONS];
