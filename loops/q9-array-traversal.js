// Question 9:
// Demonstrate array traversal using a for loop.

// ==========================================
// 1. Traverse an Array
// ==========================================

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}


// ==========================================
// 2. Traverse Numbers
// ==========================================

const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log("Number:", numbers[i]);
}


// ==========================================
// 3. Calculate the Total
// ==========================================

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}

console.log("Total:", total);


// ==========================================
// Summary
// ==========================================
//
// Array traversal means visiting each element
// of an array, usually one at a time.
//
// The index starts at 0 and continues while
// the index is less than the array length.