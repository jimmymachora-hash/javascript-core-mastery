// Question 1:
// Practice declaring variables using var, let, and const,
// and identify different JavaScript data types.

// ==========================================
// 1. Variables
// ==========================================

var name = "Jonathan";
let age = 23;
const country = "Kenya";

console.log(name);
console.log(age);
console.log(country);


// ==========================================
// 2. Different Data Types
// ==========================================

const fullName = "Jonathan Jimmy"; // String
const studentAge = 23;             // Number
const isStudent = true;            // Boolean
let course;                        // Undefined
const emptyValue = null;           // Null

console.log(fullName, typeof fullName);
console.log(studentAge, typeof studentAge);
console.log(isStudent, typeof isStudent);
console.log(course, typeof course);
console.log(emptyValue, typeof emptyValue);


// ==========================================
// 3. Reassignment
// ==========================================

let score = 50;

score = 75;

console.log(score);


// ==========================================
// 4. Constant
// ==========================================

const school = "Moringa School";

console.log(school);