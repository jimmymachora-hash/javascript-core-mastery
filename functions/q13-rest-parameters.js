// Question 13:
// Demonstrate rest parameters in JavaScript.

// ==========================================
// 1. Accept Multiple Arguments
// ==========================================

function addNumbers(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    return total;
}

console.log("Total:", addNumbers(10, 20, 30));


// ==========================================
// 2. Rest Parameter with Other Parameters
// ==========================================

function introduce(name, ...hobbies) {
    console.log("Name:", name);
    console.log("Hobbies:", hobbies);
}

introduce("Jonathan", "Coding", "Football", "Music");


// ==========================================
// Summary
// ==========================================
//
// The rest parameter (...) allows a function
// to accept any number of arguments.
//
// The extra arguments are collected into an array.