// Question 21:
// Demonstrate the Temporal Dead Zone (TDZ).

// ==========================================
// 1. let and the Temporal Dead Zone
// ==========================================

function letExample() {
    let message = "Hello, Jonathan";

    console.log(message);
}

letExample();


// ==========================================
// 2. const and the Temporal Dead Zone
// ==========================================

function constExample() {
    const course = "Software Engineering";

    console.log(course);
}

constExample();


// ==========================================
// 3. var vs let
// ==========================================

function varExample() {
    console.log(name);

    var name = "Jonathan";
}

varExample();


// ==========================================
// Summary
// ==========================================
//
// The Temporal Dead Zone (TDZ) is the period
// between entering a scope and the point where
// a let or const variable is declared.
//
// Accessing a let or const variable before its
// declaration causes a ReferenceError.
//
// var behaves differently because it is hoisted
// and initialized with undefined.