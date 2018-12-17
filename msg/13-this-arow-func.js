let student = {
    name: 'Dang Quy',
    courses: ['Android', 'IOS', "Java"],
    showInfo: function(){
        this.courses.forEach(course => console.log(`${this.name} have course is ${course}`));
    }
}

student.showInfo();