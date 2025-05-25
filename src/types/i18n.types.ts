export interface TranslationKeys {
  common: {
    goToHome: string;
    privacyPolicy: string;
    termsOfService: string;
    contact: string;
    businessInfo: string;
    copyright: string;
    currency: string;
    back: string;
    goBack: string;
    goHome: string;
  };
  error: {
    pageNotFound: string;
    testInvalid: string;
    testInvalidDescription: string;
    retakeTest: string;
    invalidReasons: {
      tooFast: string;
      sameAnswer: string;
    };
    required: string;
    englishNameRequired: string;
    englishNameInvalid: string;
    koreanNameRequired: string;
    koreanNameInvalid: string;
    addressRequired: string;
    phoneNumberRequired: string;
    phoneNumberInvalid: string;
    unknown: string;
    paymentMethodRequired: string;
    paymentInProgress: string;
  };
  header: {
    language: string;
  };
  main: {
    subtitle: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    button: string;
    section1: {
      title: string;
      subtitle: string;
      description1: {
        title: string;
        content: string;
      };
      description2: {
        title: string;
        content: string;
      };
      description3: {
        title: string;
        content: string;
      };
    };
    section2: {
      title: string;
      subtitle: string;
      scores: {
        highest: string;
        higher: string;
        high: string;
        aboveAverage: string;
        belowAverage: string;
        low: string;
        lower: string;
        lowest: string;
        mensaNote: string;
      };
    };
  };
  test: {
    timeRemaining: string;
    minutes: string;
    seconds: string;
    question: string;
    nextQuestion: string;
    submitTest: string;
    confirmSubmit: string;
    confirmSubmitDescription: string;
    yes: string;
    no: string;
    warning: {
      title: string;
      startButton: string;
      description: string;
      rules: {
        timeLimit: string;
        allQuestions: string;
        noPageLeave: string;
        noRefresh: string;
      };
    };
    invalid: {
      contactMessage: string;
      contactLink: string;
    };
  };
  result: {
    title: string;
    score: string;
    description: string;
    downloadCertificate: string;
    retakeTest: string;
    shareResult: string;
    analysis: {
      title: string;
      overall: string;
      categories: {
        logical: string;
        spatial: string;
        numerical: string;
        memory: string;
      };
    };
  };
  payment: {
    title: string;
    selectOption: string;
    coupon: {
      title: string;
      placeholder: string;
      register: string;
      apply: string;
      label: string;
    };
    options: {
      basic: {
        title: string;
        features: string[];
      };
      online: {
        title: string;
        features: string[];
      };
      premium: {
        title: string;
        features: string[];
      };
    };
    process: {
      title: string;
      englishName: string;
      koreanName: string;
      address: string;
      phoneNumber: string;
      goBack: string;
      makePayment: string;
    };
    form: {
      englishName: string;
      englishNamePlaceholder: string;
      koreanName: string;
      koreanNamePlaceholder: string;
      address: string;
      addressPlaceholder: string;
      detailedAddress: string;
      detailedAddressPlaceholder: string;
      phoneNumber: string;
      phoneNumberPlaceholder: string;
      searchAddress: string;
    };
    pay: string;
    fail: {
      title: string;
    };
    processing: string;
  };
  userInfo: {
    country: {
      label: string;
      placeholder: string;
      options: {
        kr: string;
        us: string;
        jp: string;
        cn: string;
        other: string;
      };
    };
  };
  terms: {
    service: {
      title: string;
      article4: {
        title: string;
        content: {
          list: string;
          items: {
            test: string;
            score: string;
            report: string;
          };
        };
      };
    };
  };
}
