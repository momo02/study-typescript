// Constructor의 매개변수에 Access Modifiers를 직접 적용하여 코드를 더 간결하게 작성.
// Constructor의 매개변수 앞에 Access Modifiers를 붙여주면 암묵적으로 Class 의 멤버변수로 선언이 된다.
// -> 객체가 생성될 때 Constructor의 매개변수로 전달된 값은 Constructor 내부에서 별도로 초기화되는 코드없이
//    typescript 컴파일러에 의해 객체의 프로퍼티 값으로 초기화되고 할당된다.
var Employee5 = /** @class */ (function () {
    // private _fullName: string;
    // age: number;
    // jobTitle?: string;
    // hourlyRate?: number;
    // workingHoursPerWeek?: number;
    function Employee5(_fullName, _age, _jobTitle, _hourlyRete, workingHoursPerWeek) {
        var _this = this;
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this._hourlyRete = _hourlyRete;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.printEmployeeDetails = function () {
            var income = typeof _this._hourlyRete === "number" &&
                typeof _this.workingHoursPerWeek === "number"
                ? _this._hourlyRete * _this.workingHoursPerWeek
                : 0;
            var msg = _this._fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this._jobTitle + " \uC774\uACE0, \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + income + " \uB2EC\uB7EC \uC774\uB2E4.";
            console.log(msg);
        };
        //   this._fullName = fullName;
        //   this.age = age;
        //   this.jobTitle = jobTitle;
        //   this.hourlyRate = hourlyRete;
        //   this.workingHoursPerWeek = workingHoursPerWeek;
    }
    Object.defineProperty(Employee5.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee5;
}());
var employee9 = new Employee5("공유", 40, "배우", 40, 35);
employee9.printEmployeeDetails();
var employee10 = new Employee5("아이유", 29, "가수");
employee10.fullName = "나이유";
console.log(employee10.fullName);
employee10.printEmployeeDetails();
