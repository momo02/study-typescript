/** 타입으로 사용되는 인터페이스(interface) */
// [Before]
// function getStudentDetails(
//   studentID: number
// ): {
//   studentID: number;
//   studentName: string;
//   age: number;
//   gender: string;
//   subject: string;
//   courseCompleted: boolean;
// } {
//   return null;
// }
// [After] 인터페이스를 사용하여 간결해진 코드!
// 인터페이스를 타입으로 가지는 값은 인터페이스의 구조를 그 값으로 가지도록 강제된다.
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: "momo Park",
        //age: 29,
        gender: "female",
        subject: "Javascript",
        courseCompleted: false
    };
}
// 여기서는 함수의 파라미터 타입을 Student 타입으로 지정 (코드 재사용성 향상)
function saveStudentDetails(student) {
    console.log(student.studentID + " is saved.");
    // Readonly 프로퍼티는 읽기 전용 프로퍼티로, 객체 생성 시 할당된 프로퍼티의 값을 바꿀 수 없다.
    //student.studentID = 1122222; //Error!
}
saveStudentDetails({
    studentID: 12345,
    studentName: "momo Park",
    //age: 29,
    gender: "female",
    subject: "Javascript",
    courseCompleted: false
});
//cf. 컴파일된 Javascript 파일을 보면 Typescript에 선언된 인터페이스는 보이지 않음.
// 실제로 인터페이스는 코드가 렌더링될 때 아무런 영향력이 없어, 타입스크립트 컴파일러가 타입스크립트를 자바스크립트로 변환할 때 코드에서 지워버림.
// 즉, 인터페이스는 작성중인 코드에 대한 더 많은 정보를 타입스크립트에게 제공하기 위해 존재하는것이라 보면 됨.
// --> 개발 편의 & 컴파일 시 버그 체크 가능
