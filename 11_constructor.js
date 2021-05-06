// 생성자(Constructor)
var Employee2 = /** @class */ (function () {
    //생성자
    function Employee2(fullName, age, jobTitle, hourlyRete, //선택적 매개변수
    workingHoursPerWeek //선택적 매개변수
    ) {
        var _this = this;
        this.printEmployeeDetails = function () {
            var income = typeof _this.hourlyRate === "number" &&
                typeof _this.workingHoursPerWeek === "number"
                ? _this.hourlyRate * _this.workingHoursPerWeek
                : 0;
            var msg = _this.fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + " \uC774\uACE0, \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + income + " \uB2EC\uB7EC \uC774\uB2E4.";
            console.log(msg);
        };
        this.fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRete;
        this.workingHoursPerWeek = workingHoursPerWeek;
    }
    return Employee2;
}());
var employee3 = new Employee2("공유", 40, "배우", 40, 35);
employee3.printEmployeeDetails();
var employee4 = new Employee2("아이유", 29, "가수");
employee4.fullName = "나이유";
employee4.printEmployeeDetails();
