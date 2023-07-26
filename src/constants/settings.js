// 계산기 세팅 관련 상수
export const DECIMAL_PLACE = 0;
export const MAX_OPERAND_LENGTH = 3;

// 계산기 제공 연산자
const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";

export const OPERATORS = {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
};

// 계산기 출력 가능 오류 메시지
const INVALID_OPERATOR = "연산자 형태가 유효하지 않습니다.";
const INVALID_OPERAND = "피연산자 형태가 유효하지 않습니다.";
const EMPTY_OPERAND = "피연산자가 비어있습니다.";
const LONG_OPERAND = `피연산자가 입력 가능 자릿수(${MAX_OPERAND_LENGTH})를 초과하였습니다.`;
const INVALID_RESULT = "계산 결과가 유효하지 않습니다.";

export const ERROR_MESSAGE = {
  INVALID_OPERATOR,
  EMPTY_OPERAND,
  INVALID_OPERAND,
  LONG_OPERAND,
  INVALID_RESULT,
};
