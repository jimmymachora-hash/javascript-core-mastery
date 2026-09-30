 // Question 5:
// Demonstrate nested logic using if statements.

// ==========================================
// 1. Basic Nested Condition
// ==========================================

const age = 23;
const hasID = true;

if (age >= 18) {
    console.log("You are an adult.");

    if (hasID) {
        console.log("You have a valid ID.");
    }
}


// ==========================================
// 2. Nested Conditions with Else
// ==========================================

const score = 85;

if (score >= 50) {
    console.log("You passed.");

    if (score >= 80) {
        console.log("Excellent performance.");
    } else {
        console.log("Good performance.");
    }
} else {
    console.log("You failed.");
}


// ==========================================
// 3. Combining Nested Logic
// ==========================================

const isStudent = true;
const hasPaidFees = true;

if (isStudent) {
    if (hasPaidFees) {
        console.log("Student is allowed to attend class.");
    } else {
        console.log("Please pay your fees.");
    }
} else {
    console.log("This person is not a student.");
}


// ==========================================
// Summary
// ==========================================
//
// Nested if statements allow one decision
// to depend on another decision.
//
// The inner condition is checked only when
// the outer condition is true.