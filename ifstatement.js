// let hadCoffee = true;

// if (hadCoffee == true) {
//     console.log("You've had a coffee.")
// }


// if (10-9) {
//     console.log("This statement is true!")
// }

// 1 Write an if statement that evaluates a boolean condition.
// Make sure the statement evaluates as false
let hadCoffee = false;  

if (hadCoffee) {
    console.log("You need a coffee.")
}

// 2 Write an if statement that evaluates a number as a condition.
// Make sure the statement evaluates as false
let num1 = 21;
if (num1) {
    console.log(`Q2: ${num1}`)
} 

// 3 Write an if statement that evaluates a negative number as a condition.
// Make sure the statement evaluates as true
// if (-1 < 10) {
//     console.log("This statement is true. -1 is less than 10.")
// }
let num2 = -0    // -0 is a falsey
if (num2) {
    console.log(`Q3: ${num2}`)
}


// 4 Write an if statement that evaluates a string.
// Try out the following values for the string: 
// 0, false, NaN, undefined
let stringValue = "NaN";     
if (stringValue) {
    console.log(`Q4: ${stringValue}`)
}