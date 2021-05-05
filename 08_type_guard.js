// Type Guard : Union Type을 사용할 때 typeof Operator 등을 사용하여 코드 검증을 수행하는 것.
var itemPrice;
// 파라미터인 price변수 타입이 number일수도 string일수 도 있어서
// number 타입이여야만 하는 itemPrice 에 값을 할당할 때 컴파일 에러 발생.
// const setItemPrice = (price: StringOrNum): void => {
//   itemPrice = price;
// };
// setItemPrice(50);
// 어떻게 이런 문제를 해결할까?
// -> 자바스크립트에 내장된 typeof 연산자와 조건문 사용.
// cf) typeof Operator : 변수의 데이터 타입을 반환하는 연산자.
var setItemPrice = function (price) {
    if (typeof price === "string") {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(50);
