// Any Type : 어떠한 타입이든 해당 변수에 할당 가능. 타입 체크 안함.
let someValue: any = 5;
someValue = "hello";
someValue = true;

// But ! 최대한 any타입은 쓰지않는게 좋다.
// 타입스크립트에서는 타입에 관한 더 많은 정보를 명시할 수록 더 좋다.
// 타입에러를 컴파일 시에 잡아내는것이 코드 유지보수에 용이.
