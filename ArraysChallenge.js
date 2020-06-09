// Q1 - Declare an empty array using the new Array syntax
console.log("Question 1/2: Declared new array using \"new Array\" syntax and pushed 3 string values");
let myArray = new Array();
// Q2 - Push 3 string values to the array

myArray.push("shirt");
myArray.push("pants");
myArray.push("hat");

console.log(myArray);

// Q3 - Log all the string values in reverse order (last element logged first, etc.)
console.log("Question 3: Log all string values in reverse");
// console.log(myArray.reverse());

for (let i = myArray.length-1; i >= 0; i--) {
    let reverse = myArray[i];
    console.log(reverse);
}

// Q4 - Create an array of numbers. There should be at least 4 elements in the array

// let numbers = [10, 20, 30, 40];
console.log("Question 4: Array of numbers");
let numbers = [1,7,9,10,21,68]

console.log(numbers);

// Q5 - Add a new element at the start and end of the array
console.log("Question 5: Add an element at the start and end of the array");
numbers.push(80);   // to end of array
numbers.unshift(2);    // to start of array
console.log(numbers);

// Q6 - Log all the elements with an even index
console.log("Question 6: Log all elements with an even index");
for (let i = 0; i < numbers.length; i+=2) {   // adding 2
        console.log(numbers[i]);
    }


for (let i = 0; i < numbers.length; i++) {
    if (i % 2 == 0) { // index is even - using modulus operator
        console.log(numbers[i]);
    }
}

// Q7 - Log all the elements that are divisible by 2 (use a for..of loop)
console.log("Question 7: Log all elements divisible by 2");
console.log("original array:")
console.log(numbers);
console.log("only elements divisble by 2:")
for (let element of numbers) {
    if (element % 2 == 0) {
        console.log(element);
    }
}

// Q8 - Create a new array and fill it with all the elements that are greater than or equal to 10
console.log("Question 8: create a new array with elements >= 10");
console.log("original array:")
console.log(numbers);

console.log("only elements >= 10 (using for of)")
let newArray = new Array();
for (let element of numbers) {
    // let newArray = new Array();
    if (element >= 10) {
        newArray.push(element);
    }
    console.log(newArray);
}
console.log("only elements >= 10 (using for loop)")
let newArray = new Array();
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element >= 10) {
        newArray.push(element);
    }
}
console.log(newArray);