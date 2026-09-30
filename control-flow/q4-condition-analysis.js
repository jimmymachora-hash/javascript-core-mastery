// Question 4:
// Analyze how conditions work together in control flow.

// ==========================================
// 1. AND (&&)
// ==========================================

const age = 23;
const hasID = true;

if (age >= 18 && hasID === true) {
    console.log("You are an adult with a valid ID.");
}


// ==========================================
// 2. OR (||)
// ==========================================

const isStudent = false;
const isEmployee = true;

if (isStudent || isEmployee) {
    console.log("You qualify for the program.");
}


// ==========================================
// 3. NOT (!)
// ==========================================

const isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in.");
}


// ==========================================
// 4. Combining Conditions
// ==========================================

const score = 85;
const attendance = 90;

if (score >= 70 && attendance >= 80) {
    console.log("Student passes both requirements.");
} else {
    console.log("Student does not meet the requirements.");
}


// ==========================================
// Summary
// ==========================================
//
// && requires all conditions to be true.
// || requires at least one condition to be true.
// ! reverses a boolean value.
//
// Conditions allow a program to make decisions.