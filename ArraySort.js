// let numbers = [12, 9, 8];
// console.log(numbers);
// console.log(numbers.sort());  // outputs 12, 8, 9 - takes the 1 in 12 as first

// function compareNumbers(num1, num2) {  // will take in 2 numbers 
//     if (num1 < num2) {
//         return -1;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return 0;  // num1 == num2
//     }
// }

// console.log(numbers.sort(compareNumbers));

// console.log(numbers.sort((num1, num2) => num1 - num2));

// Q1 array of numbers and sort from largest to smallest
console.log("Question 1 array of numbers and sort from largest to smallest");

let myNumbers = [8, 12, 45, 21, 15, 7]

console.log(myNumbers.sort((num1, num2) => num2 - num1));

// Q2 - Create a sort function that will sort the following array of events into chronological order:
console.log();
console.log("Question 2 - events in chronological order")
let events = [
    {
        name: "Went on holiday",
        month: 3,
        year: 2019
    }, {
        name: "Got first car",
        month: 5,
        year: 2015
    }, {
        name: "Moved out of home",
        month: 11,   
        year: 2019  
    }
];

const yearOrder = (year1, year2) => year1.year - year2.year   // year in order

const monthOrder = (month1, month2) => month1.month - month2.month   // month in order

console.log(events.sort(monthOrder).sort(yearOrder));

// Q3 - Sort the following array in alphabetical order by last name, then by first name
let people = [
    {
        firstName: "Margaret",
        lastName: "Cox"
    }, {
        firstName: "Aaryan",
        lastName: "Bauer"
    }, {
        firstName: "Asma",
        lastName: "Bauer"
    }, {
        firstName: "Jazmin",
        lastName: "Flowers"
    }
];

// const lastNameOrder = (lastName1, lastName2) => lastName1.lastName - lastName2.lastName  
// const firstNameOrder = (firstName1, firstName2) => firstName1.firstName - firstName2.firstName  

function lastNameOrder(person1, person2) {
    if (person1.lastName.toLowerCase() < person2.lastName.toLowerCase()) {
        return -1;
    } else if (person1.lastName.toLowerCase() > person2.lastName.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}

function firstNameOrder (person1, person2) {
    if (person1.firstName.toLowerCase() < person2.firstName.toLowerCase()) {
        return -1;
    } else if (person1.firstName.toLowerCase() > person2.firstName.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}

console.log(people.sort(firstNameOrder).sort(lastNameOrder));