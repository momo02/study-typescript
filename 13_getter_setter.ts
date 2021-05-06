// Getter & Setter

class Employee4 {
  private _fullName: string;
  age: number;
  jobTitle?: string;
  hourlyRate?: number;
  workingHoursPerWeek?: number;

  constructor(
    fullName: string,
    age: number,
    jobTitle: string,
    hourlyRete?: number,
    workingHoursPerWeek?: number
  ) {
    this._fullName = fullName;
    this.age = age;
    this.jobTitle = jobTitle;
    this.hourlyRate = hourlyRete;
    this.workingHoursPerWeek = workingHoursPerWeek;
  }
  // get , set 키워드를 사용하여 Getter & Setter 함수 선언.
  // 일반적인 클래스 내의 메소드와 다른점 : public 멤버변수에 접근하는 것과 같은 방법으로 클래스 외부에서 접근가능하다는 것.
  get fullName() {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
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

let employee7 = new Employee4("공유", 40, "배우", 40, 35);
employee7.printEmployeeDetails();

let employee8 = new Employee4("아이유", 29, "가수");

employee8.fullName = "나이유"; // public 멤버변수에 값을 할당하는 것처럼 () 괄호없이 setter 명을 써준다.
console.log(employee8.fullName); // public 멤버변수를 호출할 때 처럼 () 괄호없이 getter 명을 써준다.
employee8.printEmployeeDetails();

// Constructor 의 매개변수에 Access Modifiers를 직접 적용하여 더 간단하게
