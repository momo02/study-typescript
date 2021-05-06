// Access Modifiers(접근 제한자)
var Employee3 = /** @class */ (function () {
    //생성자
    function Employee3(fullName, age, jobTitle, hourlyRete, //선택적 매개변수
    workingHoursPerWeek //선택적 매개변수
    ) {
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
    return Employee3;
}());
var employee5 = new Employee3("공유", 40, "배우", 40, 35);
employee5.printEmployeeDetails();
var employee6 = new Employee3("아이유", 29, "가수");
//employee6._fullName = "나이유"; //compile Error!
//console.log(employee6._fullName); //compile Error!
// --> private 멤버변수는 class 내부에서만 접근 가능. 값을 읽을 수도 없음.
// 이렇게 비공개로 설정된 private 멤버변수에 접근하여 값을 쓰거나 읽기 위해 타입스크립트에서는 Getter와 Setter라는 컨셉을 제공.
employee6.printEmployeeDetails();
