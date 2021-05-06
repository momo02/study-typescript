// 생성자(Constructor)

class Employee2 {
  fullName: string;
  age: number;
  jobTitle?: string;
  hourlyRate?: number;
  workingHoursPerWeek?: number;

  //생성자
  constructor(
    fullName: string,
    age: number,
    jobTitle: string,
    hourlyRete?: number, //선택적 매개변수
    workingHoursPerWeek?: number //선택적 매개변수
  ) {
    this.fullName = fullName;
    this.age = age;
    this.jobTitle = jobTitle;
    this.hourlyRate = hourlyRete;
    this.workingHoursPerWeek = workingHoursPerWeek;
  }

  printEmployeeDetails = (): void => {
    const income =
      typeof this.hourlyRate === "number" &&
      typeof this.workingHoursPerWeek === "number"
        ? this.hourlyRate * this.workingHoursPerWeek
        : 0;
    const msg = `${this.fullName}의 직업은 ${this.jobTitle} 이고, 일주일의 수입은 ${income} 달러 이다.`;
    console.log(msg);
  };
}

let employee3 = new Employee2("공유", 40, "배우", 40, 35);
employee3.printEmployeeDetails();

let employee4 = new Employee2("아이유", 29, "가수");
employee4.fullName = "나이유";
employee4.printEmployeeDetails();
