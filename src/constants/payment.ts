export const PAYMENT_OPTIONS = {
  BASIC: {
    id: 'basic',
    title: '점수만 제공',
    price: 18980,
    features: ['테스트 결과 점수 제공'],
    isBest: false,
  },
  ONLINE: {
    id: 'online',
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
  ONLINE: 'online',
  PREMIUM: 'premium',
} as const;

export const FORM_FIELDS = {
  ENGLISH_NAME: 'englishName',
  KOREAN_NAME: 'koreanName',
  ADDRESS: 'address',
  DETAILED_ADDRESS: 'detailedAddress',
  PHONE_NUMBER: 'phoneNumber',
} as const;

export const PAYMENT_STATUS = {
  SUCCESS: 'success',
  FAIL: 'fail',
} as const;

export const PAYMENT_PATHS = {
  PAYMENT: '/payment',
  PROCESS: '/payment/process',
  SUCCESS: '/payment/success',
  FAIL: '/payment/fail',
} as const;

export const PAYMENT_WIDGET_CONFIG = {
  CUSTOMER_KEY: 'zdUK26HxM2IG4TXf_wIDO', // TODO: 실제 고객 키로 교체
  CURRENCY: 'KRW',
  VARIANT_KEY: {
    PAYMENT_METHODS: 'DEFAULT',
    AGREEMENT: 'AGREEMENT',
  },
} as const;

export const PAYMENT_WIDGET_SELECTORS = {
  PAYMENT_METHOD: '#payment-method',
  AGREEMENT: '#agreement',
} as const;

export const COUPON = {
  AMOUNT: 5000,
  LABEL: '5,000원 쿠폰 적용',
} as const;
