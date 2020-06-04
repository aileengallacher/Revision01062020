// function addTwo (num) {
//     return num + 2;
// }

// const addTwo = num => num + 2
// console.log(addTwo(12));

// Q1
const greeting = name => console.log("Hello " + name);

greeting("Aileen");

// Q2 Create an arrow function that takes in a name and returns a string with the value "Hello" and then the person's name
const anotherGreeting = name2 => "Hello " + name2

console.log(anotherGreeting("Ayla"));


// Q3 Create an arrow function that takes in 2 numbers and logs the largest of those numbers to the console
const twoNumbers = (num1, num2) => (num1 > num2) ? console.log(num1) : console.log(num2)
 // OR
const twoNumbers = (num1, num2) => console.log((num1 > num2)) ? num1 : num2


//     if (num1 > num2) {
//         console.log(num1);
//     } else {
//         console.log(num2);
//     }
// }
twoNumbers(18, 21);


// Q4 Create an arrow function that takes in 2 numbers and returns the smallest of those numbers
const anotherTwoNumbers = (num1, num2) => (num1 < num2) ? num1 : num2
    // if (num1 < num2) {
    //     return num1;
    // } else {
    //     return num2;
    // }
    // convert to a turnary then it can become a 1 line arrow function
    // return (num1 < num2) ? num1 : num2

console.log(anotherTwoNumbers(7,65));
