// Question 20:
// Demonstrate scope tracing in JavaScript.

// ==========================================
// 1. Global Scope
// ==========================================

const name = "Jonathan";

function outerFunction() {
    const course = "Software Engineering";

    console.log("Name:", name);
    console.log("Course:", course);

    function innerFunction() {
        const school = "Moringa School";

        console.log("Name:", name);
        console.log("Course:", course);
        console.log("School:", school);
    }

    innerFunction();
}

outerFunction();


// ==========================================
// Summary
// ==========================================
//
// Scope tracing means following where JavaScript
// looks for a variable.
//
// JavaScript first checks the current scope.
// If it does not find the variable, it moves
// outward to the parent scope.
//
// This is called the scope chain.