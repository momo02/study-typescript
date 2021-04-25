export {};
/** Enum(열거형) */
// cf. 컴파일된 자바스크립트 파일을 보면 컴파일 시 코드가 사라지는 interface와는 달리
//  enum은 코드가 구현되어 자바스크립트 파일에 나타남. -> 즉 enum은 런타임에 존재하는 실제 객체.

// - enum 선언

// 1) Numeric Enum : 숫자 열거형
// 기본적으로 typeScript(tsc)는 enum 속에 선언된 값의 순서에따라 0부터 순차적으로 숫자 값을 할당.
enum GenderType_bak {
  Male,
  Female,
  genderNeutral,
}

// 2) String Enum : 문자 열거형
// Enum 속의 값의 value에 숫자 값이 아닌 string 값을 넣고 싶다면 아래와 같이 선언.
// Numeric Enum 처럼 자동 증가하는 기능은 없지만 Javascript 코드에서 조금 더 읽기 쉬운 값을 주는 장점이 있다.
enum GenderType {
  Male = "male",
  Female = "female",
  genderNeutral = "genderNeutral",
}

interface Student {
  readonly studentID: number;
  studentName: string;
  age?: number;
  gender: GenderType.Female;
  subject: string;
  courseCompleted: boolean;
  addCommnet?: (comment: string) => string;
}

function getStudentDetails(studentID: number): Student {
  return {
    studentID: 12345,
    studentName: "momo Park",
    //age: 29,
    gender: GenderType.Female,
    subject: "Javascript",
    courseCompleted: false,
  };
}

function saveStudentDetails(student: Student): void {
  console.log(`${student.studentID} is saved.`);
}

saveStudentDetails({
  studentID: 12345,
  studentName: "momo Park",
  //age: 29,
  gender: GenderType.Female,
  subject: "Javascript",
  courseCompleted: false,
});
