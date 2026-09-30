// Question 17:
// Demonstrate global scope in JavaScript.

// ==========================================
// 1. Global Variable
// ==========================================

const appName = "JavaScript Core Mastery";

function showAppName() {
    console.log("App:", appName);
}

showAppName();


// ==========================================
// 2. Global Variable Used in a Function
// ==========================================

let country = "Kenya";

function showCountry() {
    console.log("Country:", country);
}

showCountry();


// ==========================================
// 3. Local Variable
// ==========================================

function showCourse() {
    const course = "Software Engineering";
    console.log("Course:", course);
}

showCourse();


// ==========================================
// Summary
// ==========================================
//
// A global variable is declared outside a function
// or block and can be accessed from different parts
// of the program.
//
// A local variable belongs to the function or block
// where it is declared.