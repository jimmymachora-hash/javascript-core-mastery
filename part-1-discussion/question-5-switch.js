// Question 5:
// Explain how a switch statement works and
// when it is useful compared to if/else.

// ==========================================
// Switch Statement
// ==========================================

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;

    case "Tuesday":
        console.log("Second day of the week");
        break;

    case "Wednesday":
        console.log("Middle of the week");
        break;

    case "Thursday":
        console.log("Almost the weekend");
        break;

    case "Friday":
        console.log("Weekend is near");
        break;

    case "Saturday":
        console.log("It's Saturday");
        break;

    case "Sunday":
        console.log("It's Sunday");
        break;

    default:
        console.log("Invalid day");
}

// ==========================================
// Why use switch?
// ==========================================

// switch is useful when checking one value
// against many specific possible values.
//
// if/else is usually more flexible when working
// with ranges or complex conditions.


// Example with if/else:

const age = 23;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}