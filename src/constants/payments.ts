export const PAYMENT_OPTIONS = {
  BASIC: {
    id: 'basic',
    title: '점수만 제공',
    price: 18980,
    features: ['테스트 결과 점수 제공'],
    isBest: false,
  },
  STANDARD: {
    id: 'standard',
    title: '온라인 인증서 + 보고서',
    price: 20890,
    features: ['테스트 결과 점수 제공', '온라인 인증서', '상세 보고서'],
    isBest: false,
  },
  PREMIUM: {
    id: 'premium',
    title: '프리미엄 패키지',
    price: 54990,
    features: ['테스트 결과 점수 제공', '온라인 인증서', '오프라인 인증서', '상세 보고서', '브레인브레인 굿즈'],
    isBest: true,
  },
} as const;

export const PAYMENT_TYPES = {
  BASIC: 'basic',
  STANDARD: 'standard',
  PREMIUM: 'premium',
} as const;

export const PAYMENT_STATUS = {
  SUCCESS: 'success',
  FAIL: 'fail',
} as const;

export const PAYMENT_PATHS = {
  PAYMENT: '/payments',
  SUCCESS: '/payments/success',
  FAIL: '/payments/fail',
} as const;
