"use strict";
exports.__esModule = true;
/** 타입 명시 (Type Annotations) */
// 변수의 타입 명시
var studentID = 12345;
var studentName = "momo Park";
var age = 29;
var gender = "female";
var subject = "Javascript";
var courseCompleted = false;
// 함수의 타입 명시
function noReturn(studentID) {
    console.log("student id is " + studentID);
}
noReturn(111);
function returnObj(studentID) {
    return null;
}
returnObj(222);
// 타입에 관한 더 많은 정보를 줄 수록 좋다.
// 더 많은 정보를 제공할수록 타입스크립트는 우리가 코드를 좀 더 깔끔하고 효과적으로 작성하고 유지보수 할 수 있도록 돕는다.
// 반환되는 객체의 구조를 타입으로 지정
function getStudentDetails1(studentID) {
    return null;
}
getStudentDetails1(222);
