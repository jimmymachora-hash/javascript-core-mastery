// Question 5:
// Grade Challenge
//
// Create a program that checks a student's score
// and assigns a grade.

// ==========================================
// Student Score
// ==========================================

const score = 78;


// ==========================================
// Grade Calculation
// ==========================================

if (score >= 80) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else if (score >= 50) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}


// ==========================================
// Pass or Fail
// ==========================================

if (score >= 50) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}