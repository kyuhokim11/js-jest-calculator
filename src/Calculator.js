class Calculator {
    a;
    b;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    // 소수점 이하는 버림
    floor(result) {
        return Math.floor(result);
    }

    // 더하기
    get sum() {
        return this.a + this.b;
    }
    // 빼기
    get subtract() {
        return this.a - this.b;
    }
    // 곱하기
    get multiply() {
        return this.a * this.b;
    }
    // 나누기
    get divide() {
        return this.a / this.b;
    }
}

export default Calculator;
