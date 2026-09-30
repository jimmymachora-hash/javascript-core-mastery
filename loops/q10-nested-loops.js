// Question 10:
// Demonstrate nested loops.

// ==========================================
// 1. Basic Nested Loop
// ==========================================

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i =", i, "j =", j);
    }
}


// ==========================================
// 2. Multiplication Table
// ==========================================

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + " x " + j + " =", i * j);
    }
}


// ==========================================
// Summary
// ==========================================
//
// A nested loop is a loop inside another loop.
//
// For every iteration of the outer loop,
// the inner loop runs completely.