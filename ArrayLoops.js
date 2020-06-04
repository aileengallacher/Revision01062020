// // Q1 - Create an array of strings

// let stringsArray = ["red", "blue", "pink", "yellow"];

// // Q2 - Loop over the array of strings and log each one to the console

// for (let i = 0; i < stringsArray.length; i++) {
//     let myArray = stringsArray[i];
//     console.log(myArray);
// }

// // Q3 - Create an array of numbers

// let myNumbers = [21,22,23,24];

// // Q4 - Loop over the array of numbers and log the number times 2 for each element in the array
// console.log(myNumbers);

// for (let i = 0; i < myNumbers.length; i++) {
//     let timesTwo = myNumbers[i];
//     console.log(timesTwo * 2);
// }

let numbers = [12, 19, 57, 84, 24];

// For Of Loops
console.log("Using For ... Of");
for (let element of numbers) {
    console.log(element);
}
// this is the same uinf for loop - this has access to the index i
console.log("Using For ... Loop");
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(number);

}
// For Of Loops example
console.log("Example: Using For ... Of ");
for (let element of numbers) {
    if (element > 30) {
        console.log("Wow, thats a big number!");
    } else {
        console.log("Mmm, that number is not vey big.")
    }
    //console.log(element);
}