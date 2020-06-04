// Q1 - Create an array of numbers. There should be at least 5 elements

let numbers = [21, 22, 23, 24, 25];
console.log("Q1 Array of numbers with 5 elements");
console.log(numbers);

// Q2 - Add a number to the end of the number array
numbers.push(26); 
console.log("Q2 Add a number to the end of the array");
console.log(numbers);

// Q3 - Add a number to the front of the number array
numbers.unshift(20); 
console.log("Q3 Add number to the front of the array");
console.log(numbers);

// Q4 - Change the value of the last element in the array to another number
numbers[6] = 88;
console.log("Q4 Change the value of the last element");
console.log(numbers);

// Q5 - Remove the last element of the array
numbers.pop();
console.log("Q5 Remove the last element");
console.log(numbers);

// Q6 - Remove the first 2 elements of the array
numbers.shift();
numbers.shift();
console.log("Q6 Remove the first 2 elements");
console.log(numbers);

// Q7 - Create an array of strings.
let stringArray = ["Aileen", "Shannon", "Ayla"];
console.log("Q7 Array of strings");
console.log(stringArray);

// Q8 - Update the second element in the array to be a new string.
stringArray[1] = "Aubree";
console.log("Q8 Update the second element to  new string");
console.log(stringArray);