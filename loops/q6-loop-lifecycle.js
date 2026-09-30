// Question 6:
// Demonstrate the lifecycle of a for loop.

// ==========================================
// 1. Basic For Loop
// ==========================================

for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}


// ==========================================
// 2. Loop with an Array
// ==========================================

const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// ==========================================
// Summary
// ==========================================
//
// A for loop has three main parts:
//
// 1. Initialization - runs once at the beginning.
// 2. Condition - checked before each iteration.
// 3. Update - runs after each iteration.
//
// The loop stops when the condition becomes false.