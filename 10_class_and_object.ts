class Employee {
  // Class 내에 정의 된 변수 : 프로퍼티 (Property)
  fullName: string;
  age: number;
  jobTitle: string;
  hourlyRate: number;
  workingHoursPerWeek: number;

  // Class 내에 정의 된 함수 : 메소드 (Method)
  printEmployeeDetails = (): void => {
    console.log(
      `${this.fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은 ${
        this.hourlyRate * this.workingHoursPerWeek
      } 달러 이다.`
    );
  };

  // 클래스 내에서 정의된 변수들은 클래스 내에서 this키워드를 통해 바로 접근 가능 -> 메소드는 상대적으로 적은 매개변수를 가짐.
  // -> 매개변수가 적을수록 더욱더 쉽게 함수를 사용할 수 있고 쉬운 유지보수가 가능하며 클린한 코드를 작성 가능.
}

// Class를 바탕으로 한 새로운 객체를 생성하는 것 -> Class의 새로운 instance (=객체)를 만드는 것.
//클래스를 통해 붕어빵 틀이 붕어빵을 찍어내듯 여러 독립된 객체들을 만들어 낼 수 있다.

let employee1 = new Employee(); //Employee Class를 바탕으로 한 employee1 객체 생성.
employee1.fullName = "공유";
employee1.age = 40;
employee1.jobTitle = "배우";
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();

let employee2 = new Employee(); //Employee Class를 바탕으로 한 employee2 객체 생성.
employee1.fullName = "아이유";
employee1.age = 29;
employee1.jobTitle = "가수";
employee1.hourlyRate = 50;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();
