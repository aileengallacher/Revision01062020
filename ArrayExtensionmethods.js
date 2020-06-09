let names = ["Anna", "Elsa", "Fred", "Fifi", "Jan", "Sebastian"];
let numbers = [5, 9, 15, 18, 21, 24, 25];


// Q1 - Write some code to find the first name in the names array that starts with an "F"
console.log();
console.log("Q1 - FIRST NAME IN THE ARRAY STARTING WITH AN 'F'");


// const findName = name => name[0] == "F" || name[0] == "f";

console.log(names.find(name => name[0] == "F" || name[0] == "f"));

// Q2 - Write some code to find the first number in the numbers array that is smaller than 10
console.log();
console.log("Q2 - FIRST NUMBER < 10");

// const findNumberUnderTen = number => number < 10

console.log(numbers.find(number => number < 10));

// Q3 - Write some code to find all the names that are 4 or less characters long
console.log();
console.log("Q3 - NAMES THAT ARE 4 OR LESS CHARACTERS LONG");

// const findNamewithFour = name => name.length <= 4;

console.log(names.filter(name => name.length <= 4));

// Q4 - Write some code to find all the numbers in the numbers array that are divisible by 3
console.log();
console.log("Q4 - NUMBER DIVISIBLE BY 3");

// const divisibleByThree = number => number % 3 == 0;

console.log(numbers.filter(number => number % 3 == 0));

// Create an array of people with the following properties: firstName, lastName, age

let people = [{
    firstName: "Hannah",
    lastName: "Banana",
    age: 18
}, {
    firstName: "Jane",
    lastName: "Doe",
    age: 21
}, {
    firstName: "Sandy",
    lastName: "Jones-Smith",
    age: 11
}, {
    firstName: "Jack",
    lastName: "Smith-Jones",
    age: 12
}];

// Q5 - Write some code to find the first person that is under 18 years old and log their full name;
console.log();
console.log("Q5 - FIRST PERSON < 18YRS AND LOG THEIR FULL NAME");

// Long Function
// function findUnder18(personAge) {
//     if (personAge.age <= 18) {
//         return true;
//     }
// }
// let personFound = people.find(findUnder18);
// console.log(`${personFound.firstName} ${personFound.lastName} is ${personFound.age} years old.`)

// Arrow Function
let personFound = people.find(personAge => personAge.age <= 18);
console.log(`${personFound.firstName} ${personFound.lastName} is ${personFound.age} years old.`)

// Q6 - Write some code to get an array of all the people that have more than 10 characters in their first and last names combined (eg. Luke Parker has exactly 10 characters and should not be included)
console.log();
console.log("Q6 - ARRAY OF ALL THE PEOPLE THAT HAVE MORE THAN 10CHAR IN FIRST & LAST NAMES COMBINED");

// Long Function
function totalCharacters(name) {
    if ((name.firstName.length + name.lastName.length) > 10) {
        return true;
    }
}
let result = people.filter(totalCharacters);
console.log(result);

// Arrow Function
console.log(people.filter(name => (name.firstName.length + name.lastName.length) > 10));

// Q7 - Write some code to find all the people that have their last name longer than their first name.
console.log();
console.log("Q7 - ALL THE PEOPLE THAT HAVE THEIR LAST NAME LONGER THAN THEIR FIRST NAME");

// Long Function
// function lastNameLonger(name) {
//     if (name.firstName.length < name.lastName.length) {
//         return true;
//     }
// }
// let nameFound = people.filter(lastNameLonger);
// console.log(nameFound);

// Arrow Function  
console.log(people.filter(name => name.firstName.length < name.lastName.length));