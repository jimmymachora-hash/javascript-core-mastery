// Question 16:
// Demonstrate higher-order functions in JavaScript.

// ==========================================
// 1. Function Passed as an Argument
// ==========================================

function greet(name) {
    return "Hello, " + name + "!";
}

function processUser(name, callback) {
    return callback(name);
}

console.log(processUser("Jonathan", greet));


// ==========================================
// 2. Using an Arrow Function as a Callback
// ==========================================

function calculate(a, b, operation) {
    return operation(a, b);
}

const sum = calculate(10, 20, (a, b) => a + b);

console.log("Sum:", sum);


// ==========================================
// 3. Function Returning Another Function
// ==========================================

function createMultiplier(number) {
    return function (value) {
        return number * value;
    };
}

const double = createMultiplier(2);

console.log("Double:", double(5));


// ==========================================
// Summary
// ==========================================
//
// A higher-order function is a function that
// takes another function as an argument or
// returns another function.
//
// Callbacks are functions passed into other
// functions to be executed later.