// Getter & Setter
var Employee4 = /** @class */ (function () {
    function Employee4(fullName, age, jobTitle, hourlyRete, workingHoursPerWeek) {
        var _this = this;
        this.printEmployeeDetails = function () {
            var income = typeof _this.hourlyRate === "number" &&
                typeof _this.workingHoursPerWeek === "number"
                ? _this.hourlyRate * _this.workingHoursPerWeek
                : 0;
            var msg = _this._fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + " \uC774\uACE0, \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + income + " \uB2EC\uB7EC \uC774\uB2E4.";
            console.log(msg);
        };
        this._fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRete;
        this.workingHoursPerWeek = workingHoursPerWeek;
    }
    Object.defineProperty(Employee4.prototype, "fullName", {
        // get , set 키워드를 사용하여 Getter & Setter 함수 선언.
        // 일반적인 클래스 내의 메소드와 다른점 : public 멤버변수에 접근하는 것과 같은 방법으로 클래스 외부에서 접근가능하다는 것.
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee4;
}());
var employee7 = new Employee4("공유", 40, "배우", 40, 35);
employee7.printEmployeeDetails();
var employee8 = new Employee4("아이유", 29, "가수");
employee8.fullName = "나이유";
console.log(employee8.fullName); // Public 멤버변수를 호출할 때 처럼 () 괄호없이 getter 명을 써준다.
employee8.printEmployeeDetails();
