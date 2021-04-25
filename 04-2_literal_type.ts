export {};
/** Literal Type */

interface Student {
  readonly studentID: number;
  studentName: string;
  age?: number;
  gender: "male" | "female" | "genderNeutral";
  subject: string;
  courseCompleted: boolean;
  addCommnet?: (comment: string) => string;
}

function getStudentDetails(studentID: number): Student {
  return {
    studentID: 12345,
    studentName: "momo Park",
    //age: 29,
    gender: "female",
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
  gender: "female",
  subject: "Javascript",
  courseCompleted: false,
});
