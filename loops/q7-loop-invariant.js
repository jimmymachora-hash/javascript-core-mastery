// Question 7:
// Demonstrate a loop invariant.

// A loop invariant is a condition that remains true
// before and after every iteration of a loop.

// ==========================================
// 1. Sum of Numbers
// ==========================================

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log("After adding", i, "sum is", sum);
}


// ==========================================
// 2. Counting Items
// ==========================================

const fruits = ["Apple", "Banana", "Mango", "Orange"];

let count = 0;

for (let i = 0; i < fruits.length; i++) {
    count++;
}

console.log("Total fruits:", count);


// ==========================================
// Summary
// ==========================================
//
// The variable "sum" keeps track of the total
// as the loop progresses.
//
// The variable "count" keeps track of how many
// items have been processed.
//
// These values maintain their intended meaning
// throughout the loop.