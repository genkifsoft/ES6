class Person {
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

class Student extends Person {
    constructor(ssv, name, age, score) {
        super(ssv, name, age);
        this.score = score;
    }

    showInfo() {
        return super.showInfo() + " - " +this.score;
    }
}

let ojectPerson = new Person(111, 'Dang Quy', 1995);

// ojectPerson.showInfo();

let objectStudent = new Student('123', 'Quy12', 1994, 10);

console.log(objectStudent.showInfo());