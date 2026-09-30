// Question 4:
// How do logical operators (&&, ||, !) evaluate expressions,
// and what values do they return?

// ==========================================
// 1. AND (&&)
// ==========================================

// && returns the second value if both values are truthy.
// Otherwise, it returns the first falsy value.

console.log(true && true);   // true
console.log(true && false);  // false

const age = 23;
const hasID = true;

console.log(age >= 18 && hasID); // true


// ==========================================
// 2. OR (||)
// ==========================================

// || returns the first truthy value.
// If all values are falsy, it returns the last value.

console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

const username = "";
const defaultName = "Guest";

console.log(username || defaultName); // Guest


// ==========================================
// 3. NOT (!)
// ==========================================

// ! reverses a boolean value.

console.log(!true);  // false
console.log(!false); // true

const isLoggedIn = false;

console.log(!isLoggedIn); // true


// ==========================================
// 4. Short-Circuit Evaluation
// ==========================================

// JavaScript stops evaluating as soon as the result is known.

const name = "Jonathan";

console.log(name && "Name exists"); // Name exists
console.log("" && "Name exists");   // ""

console.log(name || "Guest"); // Jonathan
console.log("" || "Guest");   // Guest


// ==========================================
// Summary
// ==========================================
//
// && -> returns the first falsy value, or the last value
// || -> returns the first truthy value, or the last value
// !  -> reverses truthiness