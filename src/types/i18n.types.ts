export interface TranslationKeys {
  common: {
    goToHome: string;
    privacyPolicy: string;
    termsOfService: string;
    contact: string;
    businessInfo: string;
    copyright: string;
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
  };
}
