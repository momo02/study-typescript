export {};
/** 타입 명시 (Type Annotations) */

// 변수의 타입 명시
let studentID: number = 12345;
let studentName: string = "momo Park";
let age: number = 29;
let gender: string = "female";
let subject: string = "Javascript";
let courseCompleted: boolean = false;

// 함수의 타입 명시
function noReturn(studentID: number): void {
  console.log(`student id is ${studentID}`);
}

noReturn(111);

function returnObj(studentID: number): object {
  return null;
}

returnObj(222);

// 타입에 관한 더 많은 정보를 줄 수록 좋다.
// 더 많은 정보를 제공할수록 타입스크립트는 우리가 코드를 좀 더 깔끔하고 효과적으로 작성하고 유지보수 할 수 있도록 돕는다.

// 반환되는 객체의 구조를 타입으로 지정
function getStudentDetails1(
  studentID: number
): {
  studentID: number;
  studentName: string;
  age: number;
  gender: string;
  subject: string;
  courseCompleted: boolean;
} {
  return null;
}

getStudentDetails1(222);
