"use strict";
exports.__esModule = true;
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
function saveStudentDetails(student) {
    console.log(student.studentID + " is saved.");
}
saveStudentDetails({
    studentID: 12345,
    studentName: "momo Park",
    //age: 29,
    gender: "female",
    subject: "Javascript",
    courseCompleted: false
});
