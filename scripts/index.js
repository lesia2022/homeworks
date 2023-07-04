'use strict';
function printGreetings(students) {
    const greetings = [];

    if (students.length === 0) {
        throw new Error("No students found.");
    }

    for (const { name, subject } of students) {
        greetings.push(`Hello, ${name}! You study ${subject}!`);
    }

    return greetings;
}

const students = [
    { name: 'John', age: 20, subject: 'Math' },
    { name: 'Alice', age: 22, subject: 'English' },
    { name: 'Bob', age: 21, subject: 'History' }
];

const greetings = printGreetings(students);

for (const greeting of greetings) {
    console.log(greeting);
}

