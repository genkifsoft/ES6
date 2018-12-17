class Student {
    constructor(ssv, name, age) {
        this.ssv = ssv;
        this.name = name;
        this.age = age;
    }
    showInfo() {
        return this.ssv + ' - ' + this.name + ' - ' + this.showAge();
    }

    showAge() {
        let today = new Date();
        let year = today.getFullYear();
        return year = year - this.age;
    }
}

let ojectStudent = new Student(111, 'Dang Quy', 1995);
console.log(ojectStudent.showInfo());


// console.log(ojectStudent);