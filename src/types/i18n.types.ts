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
    and: string;
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
    unknown: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    koreanNameLength: string;
    koreanNameFormat: string;
    lastNameLength: string;
    firstNameLength: string;
    englishNameFormat: string;
    ageRequired: string;
    genderRequired: string;
    countryRequired: string;
    agreementRequired: string;
    paymentsMethodRequired: string;
    paymentsInProgress: string;
    addressRequired: string;
    phoneNumberRequired: string;
    phoneNumberInvalid: string;
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
  payments: {
    title: string;
    selectOption: string;
    coupon: {
      title: string;
      placeholder: string;
      register: string;
      apply: string;
      label: string;
      invalid: string;
    };
    options: {
      basic: {
        title: string;
        features: string[];
      };
      standard: {
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
      makePayments: string;
    };
    form: {
      englishFirstName: string;
      englishFirstNamePlaceholder: string;
      englishLastName: string;
      englishLastNamePlaceholder: string;
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
      description: string;
      retry: string;
      goBack: string;
    };
    processing: string;
    success: {
      title: string;
      description: string;
      download: string;
      goHome: string;
    };
  };
  userInfo: {
    completeSubtitle: string;
    email: string;
    emailPlaceholder: string;
    englishFirstName: string;
    englishFirstNamePlaceholder: string;
    englishLastName: string;
    englishLastNamePlaceholder: string;
    koreanName: string;
    koreanNamePlaceholder: string;
    age: string;
    agePlaceholder: string;
    gender: string;
    genderOptions: {
      male: string;
      female: string;
      other: string;
    };
    agreement: string;
    submit: string;
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
    privacy: {
      title: string;
      introduction: string;
      article1: {
        title: string;
        description: string;
        items: {
          title: string;
          personalInfo: string;
          testResult: string;
          payments: string;
          shipping: string;
        };
        methods: {
          title: string;
          directInput: string;
          paymentsInfo: string;
          shippingInfo: string;
        };
      };
      article2: {
        title: string;
        description: string;
        purposes: {
          certificate: string;
          email: string;
          support: string;
          shipping: string;
        };
      };
      article3: {
        title: string;
        description: string;
        retention: {
          items: string;
          period: string;
          payments: string;
          shipping: string;
          others: string;
        };
      };
      article4: {
        title: string;
        description: string;
      };
      article5: {
        title: string;
        description: string;
        table: {
          company: string;
          task: string;
          emailCompany: string;
          emailTask: string;
          shippingCompany: string;
          shippingTask: string;
        };
      };
      article6: {
        title: string;
        description: string;
        rights: {
          access: string;
          correction: string;
          deletion: string;
          suspension: string;
        };
        contact: string;
      };
      article7: {
        title: string;
        description: string;
      };
      article8: {
        title: string;
        description: string;
        measures: {
          access: string;
        };
      };
      article9: {
        title: string;
        description: string;
        officer: {
          title: string;
          name: string;
          email: string;
          address: string;
        };
      };
      article10: {
        title: string;
        description: string;
        effectiveDate: string;
        date: string;
      };
    };
    service: {
      title: string;
      introduction: string;
      article1: {
        title: string;
        description: string;
      };
      article2: {
        title: string;
        definitions: {
          user: string;
          payments: string;
          content: string;
          shipping: string;
        };
      };
      article3: {
        title: string;
        effectiveness: {
          notice: string;
          changes: string;
          disagreement: string;
        };
      };
      article4: {
        title: string;
        services: {
          title: string;
          test: string;
          score: string;
          report: string;
          shipping: string;
        };
        changeNotice: string;
        freeService: string;
      };
      article5: {
        title: string;
        payments: {
          paidContent: string;
          process: string;
          nonRefundable: string;
          exceptions: string;
        };
      };
      article6: {
        title: string;
        revocation: string;
        irrevocable: {
          title: string;
          alreadyPrinted: string;
          nonReplicable: string;
          inLaw: string;
        };
        process: string;
      };
      article7: {
        title: string;
        userResponsibility: string;
        personalInformationMisuse: string;
        obstruction: string;
        infringeIP: string;
        violateLaw: string;
      };
      article8: {
        title: string;
        companyRights: string;
        userRestrictions: string;
        reviewCopyright: string;
      };
      article9: {
        title: string;
        protectionPolicy: string;
      };
      article10: {
        title: string;
        forceMajeure: string;
        userFault: string;
        freeServiceLiability: string;
      };
      article11: {
        title: string;
        resolutionPrinciple: string;
        jurisdiction: string;
      };
      addendum: {
        title: string;
        effectiveDate: string;
        unspecifiedMatters: string;
      };
    };
  };
  business: {
    description: string;
    table: {
      item: string;
      content: string;
      company: string;
      companyName: string;
      ceo: string;
      ceoName: string;
      businessRegistration: string;
      businessRegistrationNumber: string;
      ecommerceLicense: string;
      ecommerceLicenseInfo: string;
      address: string;
      companyAddress: string;
      phone: string;
      phoneNumber: string;
      email: string;
      companyEmail: string;
      hostingProvider: string;
      hostingProviderName: string;
    };
  };
}
