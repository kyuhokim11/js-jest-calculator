import Calculator from '../src/Calculator';

// 계산기

// 입력하는 것
// [V]2개의 숫자를 연산한다
// [V]입력한 숫자는 한번에 3자리까지 입력가능

// 출력하는 것
// [V]소수점 이하는 버림한다

// 계산하는 것
// [V]덧셈
// [V]뺄셈
// [V]곱셈
// [V]나눗셈

describe('계산기 테스트', () => {
    test('2개의 숫자를 더한다', () => {
        // given
        const calculator = new Calculator(1, 2);

        // when
        const result = calculator.sum;

        // then
        expect(result).toBe(3);
    });
    test('2개의 숫자를 뺀다', () => {
        // given
        const calculator = new Calculator(3, 2);

        // when
        const result = calculator.subtract;

        // then
        expect(result).toBe(1);
    });
    test('2개의 숫자를 곱한다', () => {
        // given
        const calculator = new Calculator(2, 3);

        // when
        const result = calculator.multiply;

        // then
        expect(result).toBe(6);
    });
    test('2개의 숫자를 나눈다', () => {
        // given
        const calculator = new Calculator(6, 3);

        // when
        const result = calculator.divide;

        // then
        expect(result).toBe(2);
    });

    test('입력한 숫자는 한번에 3자리까지 입력가능하다', () => {
        // given
        const calculator = new Calculator(100, 200);

        // when
        const a = calculator.a.toString();
        const b = calculator.b.toString();

        // then
        expect(a.length).toBe(3);
        expect(b.length).toBe(3);
    });
    test('소수점 이하는 버림한다', () => {
        // given
        const calculator = new Calculator(1.3, 2.5);

        // when
        const resultSum = calculator.floor(calculator.sum);
        const resultSubtract = calculator.floor(calculator.subtract);
        const resultMultiply = calculator.floor(calculator.multiply);
        const resultDivide = calculator.floor(calculator.divide);

        // then
        expect(resultSum).toBe(3);
        expect(resultSubtract).toBe(-2);
        expect(resultMultiply).toBe(3);
        expect(resultDivide).toBe(0);
    });
});
