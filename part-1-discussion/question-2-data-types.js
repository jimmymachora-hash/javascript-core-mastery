// Question 2:
// What are the primitive data types available in JavaScript,
// and how do they differ from reference types like arrays and objects?

// ==========================================
// Primitive Data Types
// ==========================================

// JavaScript has 7 primitive data types:
//
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

const fullName = "Jonathan Jimmy";
const age = 23;
const largeNumber = 12345678901234567890n;
const isEnrolled = true;
let course;
const emptyValue = null;
const uniqueId = Symbol("id");

console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(largeNumber, typeof largeNumber);
console.log(isEnrolled, typeof isEnrolled);
console.log(course, typeof course);
console.log(emptyValue, typeof emptyValue);
console.log(uniqueId, typeof uniqueId);


// ==========================================
// Reference Types
// ==========================================

// Arrays and objects are reference types.

// Array
const hobbies = ["Coding", "Football", "Music"];

// Object
const student = {
    name: "Jonathan",
    age: 23,
    course: "Software Engineering"
};

console.log(hobbies, typeof hobbies);
console.log(student, typeof student);


// ==========================================
// Main Difference
// ==========================================

// Primitive values store the actual value.
// Reference types store a reference to an object in memory.

// Example with primitive values:

let firstNumber = 10;
let secondNumber = firstNumber;

secondNumber = 20;

console.log(firstNumber);  // 10
console.log(secondNumber); // 20


// Example with reference types:

const firstStudent = {
    name: "Jonathan"
};

const secondStudent = firstStudent;

secondStudent.name = "Jimmy";

console.log(firstStudent.name);  // Jimmy
console.log(secondStudent.name); // Jimmy