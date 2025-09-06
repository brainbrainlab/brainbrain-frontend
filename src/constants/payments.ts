export const PAYMENT_OPTIONS = {
  BASIC: {
    id: 'basic',
    title: '기본 패키지',
    price: 9800,
    features: [
      {
        text: '테스트 결과 점수 제공',
        image: '/assets/images/previews/1.png',
      },
    ],
    isBest: false,
  },
  STANDARD: {
    id: 'standard',
    title: '온라인 인증서 패키지',
    price: 14600,
    features: [
      {
        text: '테스트 결과 점수 제공',
        image: '/assets/images/previews/1.png',
      },
      {
        text: '온라인 인증서',
        image: '/assets/images/previews/2.png',
      },
      {
        text: '상세 보고서',
        image: '/assets/images/previews/3.png',
      },
    ],
    isBest: false,
  },
  PREMIUM: {
    id: 'premium',
    title: '프리미엄 패키지',
    price: 34500,
    features: [
      {
        text: '테스트 결과 점수 제공',
        image: '/assets/images/previews/1.png',
      },
      {
        text: '온라인 인증서',
        image: '/assets/images/previews/2.png',
      },
      {
        text: '상세 보고서',
        image: '/assets/images/previews/3.png',
      },
      {
        text: '오프라인 인증서',
        image: '/assets/images/previews/4.png',
      },
    ],
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
