// Question 2:
// Demonstrate type coercion in JavaScript.

// ==========================================
// 1. String + Number
// ==========================================

const age = 23;

console.log("My age is " + age);

// JavaScript converts the number 23 into a string
// because one value is already a string.


// ==========================================
// 2. Number + String
// ==========================================

const number = 10;
const text = "5";

console.log(number + text);

// Result: "105"
// The number is converted into a string.


// ==========================================
// 3. String to Number
// ==========================================

const price = "100";

console.log(Number(price) + 50);

// Number() explicitly converts the string to a number.


// ==========================================
// 4. Boolean Conversion
// ==========================================

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Hello"));

// 1       -> true
// 0       -> false
// ""      -> false
// "Hello" -> true


// ==========================================
// 5. Comparison and Type Coercion
// ==========================================

console.log(5 == "5");
console.log(5 === "5");

// == performs type coercion.
// === does not perform type coercion.