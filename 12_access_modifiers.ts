// Access Modifiers(접근 제한자)

class Employee3 {
  private _fullName: string; // private 멤버변수라는 것을 나타내기위해 convention(관례적)으로 _(underscore) 를 붙임.
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
    this._fullName = fullName;
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
    const msg = `${this._fullName}의 직업은 ${this.jobTitle} 이고, 일주일의 수입은 ${income} 달러 이다.`;
    console.log(msg);
  };
}

let employee5 = new Employee3("공유", 40, "배우", 40, 35);
employee5.printEmployeeDetails();

let employee6 = new Employee3("아이유", 29, "가수");

//employee6._fullName = "나이유"; //compile Error!
//console.log(employee6._fullName); //compile Error!
// --> private 멤버변수는 class 내부에서만 접근 가능. 값을 읽을 수도 없음.
// 이렇게 비공개로 설정된 private 멤버변수에 접근하여 값을 쓰거나 읽기 위해 타입스크립트에서는 Getter와 Setter라는 컨셉을 제공.
employee6.printEmployeeDetails();
