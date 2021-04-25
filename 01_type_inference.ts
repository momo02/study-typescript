/** 타입 추론 (Type Inference) **/

// 변수를 a를 선언할 때 할당한 값이 숫자 5였기 때문에 타입 추론에 의해 변수 a의 타입은 숫자(Number)로 결정된 것.
let a = 5;
//a = "Hello"; //error
a = 10;

// 함수의 반환 값으로 number 타입을 할당.
// num의 타입을 명시하지 않았지만 - 연산자를 통해 리턴타입이 숫자가 될 것이라 유추
function minusNumber(num) {
  return 100 - num;
}
