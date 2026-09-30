// Question 18:
// Demonstrate block scope vs function scope.

// ==========================================
// 1. Block Scope with let and const
// ==========================================

function blockExample() {
    let message = "Outside the block";

    if (true) {
        let message = "Inside the block";
        const course = "JavaScript";
        
        console.log(message);
        console.log(course);
    }

    console.log(message);
}

blockExample();


// ==========================================
// 2. Function Scope
// ==========================================

function functionExample() {
    var name = "Jonathan";

    if (true) {
        var name = "Jimmy";
        console.log("Inside block:", name);
    }

    console.log("Inside function:", name);
}

functionExample();


// ==========================================
// Summary
// ==========================================
//
// let and const are block-scoped.
//
// var is function-scoped.
//
// A block is created by curly braces { }.
//
// A function creates its own function scope.