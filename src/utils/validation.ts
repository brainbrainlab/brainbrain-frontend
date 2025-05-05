export const validatePhoneNumber = (phoneNumber: string): boolean => {
  // 한국 휴대폰 번호 형식: 010-XXXX-XXXX 또는 010XXXXXXXX
  const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
  return phoneRegex.test(phoneNumber);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateCouponCode = (code: string): boolean => {
  // 쿠폰 코드 형식: 대문자와 숫자로 이루어진 8자리
  const couponRegex = /^[A-Z0-9]{8}$/;
  return couponRegex.test(code);
};
