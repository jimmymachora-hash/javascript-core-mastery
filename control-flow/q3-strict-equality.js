// Question 3:
// Demonstrate strict equality (===) and explain
// why it is useful in control flow.

// ==========================================
// 1. Same Value and Same Type
// ==========================================

const age = 23;

if (age === 23) {
    console.log("Age is exactly 23.");
}


// ==========================================
// 2. Same Value but Different Type
// ==========================================

const userAge = "23";

if (userAge === 23) {
    console.log("This will not run.");
} else {
    console.log("The value is not the number 23.");
}


// ==========================================
// 3. Comparing Different Values
// ==========================================

const score = 75;

if (score === 75) {
    console.log("Score is exactly 75.");
} else {
    console.log("Score is different.");
}


// ==========================================
// 4. Strict Equality vs Loose Equality
// ==========================================

console.log(5 == "5");   // true
console.log(5 === "5");  // false


// ==========================================
// Summary
// ==========================================
//
// === checks both the value and the data type.
//
// It helps prevent unexpected type coercion
// when making decisions in a program.