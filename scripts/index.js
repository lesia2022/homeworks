'use strict';

const gradeMap = new WeakMap();
function saveGrades(student, grades) {
    gradeMap.set(student, grades);
}

const student = { name: 'Ben Affleck' };
const grades = { math: 90, fiz: 85, eng: 95 };

saveGrades(student, grades);
console.log(gradeMap.get(student));
