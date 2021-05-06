// 함수의 타입 명시

// 1. 함수의 반환(Return) 타입 명시

// 아무것도 반환하지 않을 경우 void 타입 명시
// void 타입은 함수의 반환 값으로만 사용될 수 있다.
function sendGreeting(message, userName): void {
  console.log(`${message}, ${userName}`);
}

function sendGreeting2(): string[] {
  return ["Hello", "Mark"];
}

sendGreeting("Hello", "Mark");

// 2. 함수의 매개변수(Parameter) 타입 명시
// - 선택적 매개변수 (Optional Parameter) : 변수명 뒤에 ?를 붙여준다.
// 전달되는 매개변수가 여러개이고, 몇가지만 선택적 매개변수인 경우 선택적 매개변수들은 필수 매개변수 뒤에 위치 시킨다.
function sendGreeting3(message: string, userName?: string): void {
  console.log(`${message}, ${userName}`);
}

sendGreeting3("Hello");

// - 기본 매개변수 (Default Parameter) : 변수에 전달되는 값이 없을 경우 기본값을 지정. 변수명 뒤에 = '기본값' 을 붙여준다.
// 기본값으로 타입 추론이 가능하기때문에 타입을 생략해주어도 됨.
const sendGreeting4 = (message = "Hello", userName = "there"): void =>
  console.log(`${message}, ${userName}`);

sendGreeting4();
sendGreeting4("Good coding");
sendGreeting4("cheer up!!!", "momo");
