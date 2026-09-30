// Question 8:
// Demonstrate break and continue in loops.

// ==========================================
// 1. Using Continue
// ==========================================

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log("Number:", i);
}


// ==========================================
// 2. Using Break
// ==========================================

for (let i = 1; i <= 5; i++) {
    if (i === 4) {
        break;
    }

    console.log("Count:", i);
}


// ==========================================
// 3. Break with an Array
// ==========================================

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "Mango") {
        break;
    }

    console.log("Fruit:", fruits[i]);
}


// ==========================================
// Summary
// ==========================================
//
// continue skips the current iteration
// and moves to the next iteration.
//
// break stops the loop completely.