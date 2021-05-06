// Constructor의 매개변수에 Access Modifiers를 직접 적용하여 코드를 더 간결하게 작성.
// Constructor의 매개변수 앞에 Access Modifiers를 붙여주면 암묵적으로 Class 의 멤버변수로 선언이 된다.
// -> 객체가 생성될 때 Constructor의 매개변수로 전달된 값은 Constructor 내부에서 별도로 초기화되는 코드없이
//    typescript 컴파일러에 의해 객체의 프로퍼티 값으로 초기화되고 할당된다.

class Employee5 {
  // private _fullName: string;
  // age: number;
  // jobTitle?: string;
  // hourlyRate?: number;
  // workingHoursPerWeek?: number;

  constructor(
    private _fullName: string,
    private _age: number,
    private _jobTitle: string,
    private _hourlyRete?: number,
    public workingHoursPerWeek?: number
  ) {
    //   this._fullName = fullName;
    //   this.age = age;
    //   this.jobTitle = jobTitle;
    //   this.hourlyRate = hourlyRete;
    //   this.workingHoursPerWeek = workingHoursPerWeek;
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  printEmployeeDetails = (): void => {
    const income =
      typeof this._hourlyRete === "number" &&
      typeof this.workingHoursPerWeek === "number"
        ? this._hourlyRete * this.workingHoursPerWeek
        : 0;
    const msg = `${this._fullName}의 직업은 ${this._jobTitle} 이고, 일주일의 수입은 ${income} 달러 이다.`;
    console.log(msg);
  };
}

let employee9 = new Employee5("공유", 40, "배우", 40, 35);
employee9.printEmployeeDetails();

let employee10 = new Employee5("아이유", 29, "가수");

employee10.fullName = "나이유";
console.log(employee10.fullName);
employee10.printEmployeeDetails();
