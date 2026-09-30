// Question 14:
// Demonstrate how the return statement works.

// ==========================================
// 1. Returning a Value
// ==========================================

function square(number) {
    return number * number;
}

const result = square(5);

console.log("Square:", result);


// ==========================================
// 2. Return Stops Function Execution
// ==========================================

function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(checkAge(23));
console.log(checkAge(16));


// ==========================================
// 3. Return Multiple Values Using an Array
// ==========================================

function getUser() {
    return ["Jonathan", 23];
}

const user = getUser();

console.log("Name:", user[0]);
console.log("Age:", user[1]);


// ==========================================
// Summary
// ==========================================
//
// The return statement sends a value back
// to the place where the function was called.
//
// It also immediately stops the function.