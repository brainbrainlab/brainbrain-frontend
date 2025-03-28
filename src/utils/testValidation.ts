export interface TestValidationResult {
  isValid: boolean;
  reasons: ('tooFast' | 'sameAnswer')[];
}

export const validateTest = (startTime: Date, endTime: Date, answers: number[]): TestValidationResult => {
  const result: TestValidationResult = {
    isValid: true,
    reasons: [],
  };

  // 테스트 시간이 10분 미만인지 확인
  const testDurationMinutes = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
  if (testDurationMinutes < 10) {
    result.isValid = false;
    result.reasons.push('tooFast');
  }

  // 동일한 답변이 50% 이상인지 확인
  const answerCounts = answers.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const maxCount = Math.max(...Object.values(answerCounts));
  if (maxCount / answers.length >= 0.5) {
    result.isValid = false;
    result.reasons.push('sameAnswer');
  }

  return result;
};
