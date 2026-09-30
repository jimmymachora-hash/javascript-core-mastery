// Question 1:
// Explain the differences between var, let, and const
// regarding scope, hoisting, and reassignment.

// ==========================================
// 1. var
// ==========================================

// var is function-scoped.
// It can be reassigned and redeclared.
// var is hoisted and initialized with undefined.

console.log(varExample); // undefined

var varExample = "Jonathan";

varExample = "Jimmy"; // Reassignment is allowed.

var varExample = "James"; // Redeclaration is allowed.

console.log(varExample);


// ==========================================
// 2. let
// ==========================================

// let is block-scoped.
// It can be reassigned.
// It cannot be redeclared in the same scope.

let age = 23;

age = 24; // Reassignment is allowed.

console.log(age);


// ==========================================
// 3. const
// ==========================================

// const is block-scoped.
// It cannot be reassigned or redeclared.

const country = "Kenya";

console.log(country);


// ==========================================
// 4. Block Scope Example
// ==========================================

if (true) {
    let message = "Hello from let";
    const language = "JavaScript";

    console.log(message);
    console.log(language);
}

// message and language cannot be accessed here
// because let and const are block-scoped.


// ==========================================
// Summary
// ==========================================
//
// var:
// - Function-scoped
// - Can be reassigned
// - Can be redeclared
// - Hoisted and initialized as undefined
//
// let:
// - Block-scoped
// - Can be reassigned
// - Cannot be redeclared in the same scope
// - Hoisted but stays in the Temporal Dead Zone
//
// const:
// - Block-scoped
// - Cannot be reassigned
// - Cannot be redeclared
// - Hoisted but stays in the Temporal Dead Zone