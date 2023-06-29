'use strict';

const gradeMap = new WeakMap();

function saveGrades(student, grades) {
    if (!isValidStudent(student)) {
        throw new Error('Студент должен быть объектом.');
    }

    if (!isValidGrades(grades)) {
        throw new Error('Оценки должны быть представлены объектом.');
    }

    gradeMap.set(student, grades);
}

function isValidStudent(student) {
    return student && typeof student === 'object' && !Array.isArray(student) && Object.keys(student).length !== 0;
}

function isValidGrades(grades) {
    return grades && typeof grades === 'object' && !Array.isArray(grades) && Object.keys(grades).length !== 0;
}

const student = { name: 'Ben Affleck' };
const grades = { math: 90, fiz: 85, eng: 95 };

saveGrades(student, grades);
console.log(gradeMap.get(student));
