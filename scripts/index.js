'use strict';
function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;

    this.attendance = new Array(10).fill(undefined);
    this.marks = new Array(10).fill(undefined);
}

Student.prototype.present = function() {
    const index = this.findEmptyIndex(this.attendance);
    if (index !== -1) {
        this.attendance[index] = true;
    }
};

Student.prototype.absent = function() {
    const index = this.findEmptyIndex(this.attendance);
    if (index !== -1) {
        this.attendance[index] = false;
    }
};

Student.prototype.mark = function(score) {
    if (score >= 0 && score <= 10) {
        const index = this.findEmptyIndex(this.marks);
        if (index !== -1) {
            this.marks[index] = score;
        }
    } else {
        console.warn('Invalid score. Score should be between 0 and 10.');
    }
};

Student.prototype.getAge = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
};

Student.prototype.getAverageMark = function() {
    const validMarks = this.marks.filter(mark => typeof mark === 'number');
    const sum = validMarks.reduce((total, mark) => total + mark, 0);
    return validMarks.length > 0 ? sum / validMarks.length : 0;
};

Student.prototype.getAverageAttendance = function() {
    const validAttendances = this.attendance.filter(att => typeof att === 'boolean');
    const presentCount = validAttendances.reduce((count, att) => count + (att ? 1 : 0), 0);
    return validAttendances.length > 0 ? presentCount / validAttendances.length : 0;
};

Student.prototype.summary = function() {
    const avgMark = this.getAverageMark();
    const avgAttendance = this.getAverageAttendance();

    if (avgMark >= 9 && avgAttendance >= 0.9) {
        return "Ути какой молодчинка!";
    } else if (avgMark >= 9 || avgAttendance >= 0.9) {
        return "Норм, но можно лучше";
    } else {
        return "Редиска!";
    }
};

Student.prototype.findEmptyIndex = function(arr) {
    return arr.findIndex(el => el === undefined);
};

const student1 = new Student("Lesia", "Bezukh", 2001);


student1.present();
student1.present();
student1.absent();
student1.mark(8);
student1.mark(9);
student1.mark(10);


console.log(student1.getAge());
console.log(student1.getAverageMark());
console.log(student1.getAverageAttendance());
console.log(student1.summary());

