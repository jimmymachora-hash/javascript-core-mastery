// Question 19:
// Demonstrate variable shadowing in JavaScript.

// ==========================================
// 1. Variable Shadowing
// ==========================================

const name = "Jonathan";

function showName() {
    const name = "Jimmy";

    console.log("Inside function:", name);
}

showName();

console.log("Outside function:", name);


// ==========================================
// 2. Block Shadowing
// ==========================================

let country = "Kenya";

if (true) {
    let country = "Uganda";

    console.log("Inside block:", country);
}

console.log("Outside block:", country);


// ==========================================
// Summary
// ==========================================
//
// Variable shadowing happens when a variable
// declared in an inner scope has the same name
// as a variable in an outer scope.
//
// The inner variable temporarily takes priority
// inside its own scope.