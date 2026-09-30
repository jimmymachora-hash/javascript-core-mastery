// Question 11:
// Demonstrate the difference between while
// and do...while loops.

// ==========================================
// 1. While Loop
// ==========================================

let count = 1;

while (count <= 3) {
    console.log("While:", count);
    count++;
}


// ==========================================
// 2. Do...While Loop
// ==========================================

let number = 1;

do {
    console.log("Do while:", number);
    number++;
} while (number <= 3);


// ==========================================
// 3. Do...While Runs at Least Once
// ==========================================

let value = 10;

do {
    console.log("This runs once.");
    value++;
} while (value < 5);


// ==========================================
// Summary
// ==========================================
//
// A while loop checks the condition BEFORE
// running the code.
//
// A do...while loop runs the code FIRST and
// checks the condition AFTER.
//
// Therefore, a do...while loop always runs
// at least once.