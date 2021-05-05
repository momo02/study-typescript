// 아래와 같이 동일한 Union Type을 가지는 변수나 함수가 코드내에 반복 될 경우..

// let totalCost: number;
// let orderID: number | string;

// const calculateTotalCost = (price: number | string, qty: number): void => {};

// const findOrderID = (
//   customer: { costomerId: number | string; name: string },
//   productId: number | string
// ): number | string => {
//   return orderID;
// };

// 같은 코드를 반복하는 것 보다는 코드를 타입으로 지정하고 재활용하는 것이 좋은데 이럴때 Type Aliases 를 사용.
// -> 코드의 재사용성 및 가독성 향상!

type StrOrNum = number | string;

let totalCost: number;
let orderID: StrOrNum;

const calculateTotalCost = (price: StrOrNum, qty: number): void => {};

const findOrderID = (
  customer: { costomerId: StrOrNum; name: string },
  productId: StrOrNum
): StrOrNum => {
  return orderID;
};
