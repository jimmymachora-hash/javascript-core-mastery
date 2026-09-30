// Question 3:
// Discuss the difference between loose equality (==)
// and strict equality (===).
// Why is strict equality generally considered a best practice?

// ==========================================
// Loose Equality (==)
// ==========================================

// The == operator compares values after JavaScript
// performs type coercion when necessary.

const numericString = "5";
const number = 5;

console.log(numericString == number); // true


// ==========================================
// Strict Equality (===)
// ==========================================

// The === operator compares both the value AND the data type.
// It does not perform type coercion.

console.log(numericString === number); // false


// ==========================================
// More Examples
// ==========================================

console.log(10 == "10");   // true
console.log(10 === "10");  // false

console.log(true == 1);    // true
console.log(true === 1);   // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false


// ==========================================
// Why Use ===?
// ==========================================

// Strict equality is generally preferred because it avoids
// unexpected results caused by automatic type conversion.

// Example:

const age = "23";

if (age === 23) {
    console.log("Age is 23");
} else {
    console.log("The value is not the number 23");
}


// Summary:
//
// ==  -> compares values and may perform type coercion.
// === -> compares values and data types without coercion.
//
// Best practice:
// Use === when you want predictable comparisons.