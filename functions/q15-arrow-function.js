// Question 15:
// Demonstrate arrow functions in JavaScript.

// ==========================================
// 1. Basic Arrow Function
// ==========================================

const greet = (name) => {
    return "Hello, " + name + "!";
};

console.log(greet("Jonathan"));


// ==========================================
// 2. Arrow Function with Two Parameters
// ==========================================

const add = (a, b) => {
    return a + b;
};

console.log("Sum:", add(10, 20));


// ==========================================
// 3. Short Arrow Function
// ==========================================

const square = number => number * number;

console.log("Square:", square(5));


// ==========================================
// Summary
// ==========================================
//
// Arrow functions provide a shorter way to write
// functions.
//
// They use the => syntax and can make simple
// functions easier to read.