// function multiply (num1, num2) {
//     return num1 * num2;
// }
// let result = multiply(12,8);
// console.log(result);

// Q1 Create a function that takes in a name and writes "Hello" and then the person's name to the console.
// function greeting(name) {
//     console.log("Hello " + name);
// }
// greeting("Aileen");

// Q1 Update so that the name defaults to your name
function greeting(name = "Aileen") {
    console.log("Hello " + name);
}
greeting();

// Q2 Create a function that takes in a name and returns a string with the value "Hello" and then the person's name
// function anotherGreeting(name2) {
//     return "Hello " + name2
// }
// console.log(anotherGreeting("Ayla"));

// Q2 Update so that the name defaults to Luke
function anotherGreeting(name2 = "Luke") {
    return "Hello " + name2
}
console.log(anotherGreeting());

// Q3 Create a function that takes in 2 numbers and logs the largest of those numbers to the console
// function twoNumbers(num1, num2) {
//     if (num1 > num2) {
//         console.log(num1);
//     } else {
//         console.log(num2);
//     }
// }
// twoNumbers(18, 21);

// Q3 Update so that the second parameter defaults to 100
function twoNumbers(num1, num2 = 100) {
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
twoNumbers(18);


// Q4 Create a function that takes in 2 numbers and returns the smallest of those numbers
// function anotherTwoNumbers(num1, num2) {
//     if (num1 < num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }
// console.log(anotherTwoNumbers(7,65));

// Q4 Update so that both parameters default to 5
function anotherTwoNumbers(num1 = 5, num2 = 5) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(anotherTwoNumbers(2));