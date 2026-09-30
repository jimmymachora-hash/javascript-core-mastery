// Question 12:
// Demonstrate the difference between a function
// declaration and a function expression.

// ==========================================
// 1. Function Declaration
// ==========================================

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Jonathan"));


// ==========================================
// 2. Function Expression
// ==========================================

const add = function (a, b) {
    return a + b;
};

console.log("Sum:", add(10, 20));


// ==========================================
// 3. Another Function Declaration
// ==========================================

function multiply(a, b) {
    return a * b;
}

console.log("Product:", multiply(5, 4));


// ==========================================
// Summary
// ==========================================
//
// A function declaration uses the "function"
// keyword with a function name.
//
// A function expression stores a function
// inside a variable.
//
// Function declarations are hoisted, while
// function expressions assigned to const or let
// cannot be used before their declaration.