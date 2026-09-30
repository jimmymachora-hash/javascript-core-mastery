// Question 4:
// Practice using the ternary operator.

// ==========================================
// 1. Basic Ternary Operator
// ==========================================

const age = 23;

const message = age >= 18
    ? "You are an adult."
    : "You are a minor.";

console.log(message);


// ==========================================
// 2. Checking a Boolean
// ==========================================

const isStudent = true;

const status = isStudent
    ? "The person is a student."
    : "The person is not a student.";

console.log(status);


// ==========================================
// 3. Ternary with Numbers
// ==========================================

const score = 75;

const result = score >= 50
    ? "Pass"
    : "Fail";

console.log(result);


// ==========================================
// Ternary Structure
// ==========================================

// condition ? valueIfTrue : valueIfFalse
//
// If the condition is true, the first value is returned.
// If the condition is false, the second value is returned.