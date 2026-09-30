// Question 2:
// Demonstrate short-circuit evaluation using && and ||.

// ==========================================
// 1. AND (&&) Short-Circuit
// ==========================================

const username = "Jonathan";

console.log(username && "Username exists");


// If the first value is falsy, JavaScript stops
// and returns that value.

const emptyName = "";

console.log(emptyName && "Username exists");


// ==========================================
// 2. OR (||) Short-Circuit
// ==========================================

// || returns the first truthy value.

const name = "";

console.log(name || "Guest");


// If the first value is truthy, JavaScript stops
// and returns that value.

const userName = "Jonathan";

console.log(userName || "Guest");


// ==========================================
// 3. Practical Example
// ==========================================

const loggedInUser = null;

const displayName = loggedInUser || "Guest";

console.log(displayName);


// ==========================================
// Summary
// ==========================================
//
// && -> stops at the first falsy value.
// || -> stops at the first truthy value.
//
// This behavior is called short-circuit evaluation.