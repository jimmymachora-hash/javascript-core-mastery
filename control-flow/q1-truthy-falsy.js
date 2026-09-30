// Question 1:
// Demonstrate truthy and falsy values in JavaScript.

// ==========================================
// Falsy Values
// ==========================================

// These values are considered false in a Boolean context.

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


// ==========================================
// Truthy Values
// ==========================================

// These values are considered true in a Boolean context.

console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean([]));
console.log(Boolean({}));


// ==========================================
// Using Truthy/Falsy in an if Statement
// ==========================================

const username = "Jonathan";

if (username) {
    console.log("Username exists.");
} else {
    console.log("No username provided.");
}


// ==========================================
// Falsy Example
// ==========================================

const email = "";

if (email) {
    console.log("Email provided.");
} else {
    console.log("No email provided.");
}