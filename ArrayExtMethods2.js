// Q1 - Create an array of numbers. Use array extension methods to find whether all the 
// elements in the array have a value that is not divisible by 5
console.log();
console.log("Question 1 - value that IS NOT divisible by 5");
let numbers = [10, 18, 21, 35, 40, 50];

let divisibleByFive = numbers.every(num => num % 5 != 0);
console.log(divisibleByFive);

// Q2 - Create an array of strings. Use array extension methods to find whether any of the elements begin with a vowel.
console.log();
console.log("Question 2 - elements beginning with a vowel");
let fruits = ["apple", "avocado", "banana", "grapes", "tomato", "unicorn"];

// let startsWithVowel = fruits.some(letter => letter[0].toLowerCase() == "a","e","i","o","u"); // 

console.log(fruits.filter(letter => ["a", "e", "i", "o", "u"].includes(letter[0].toLowerCase())));


// Q3 Create an array of pets (name, age, owner) and use array extension methods to find whether any of the pets are owned 
// by Luke.
console.log();
console.log("Question 3 - pets owned by Luke");
let pets = [{
    name: "Muddy",
    age: 12,
    owner: "Aileen"
}, {
    name: "Pocket",
    age: 10,
    owner: "John",  //"Quinn"
}, {
    name: "Rex",
    age: 8,
    owner: "Luke"
}, {
    name: "Sandy",//"Tequila",
    age: 2,
    owner: "Aubree"
}]

console.log(pets.find(ownedByLuke => ownedByLuke.owner == "Luke"));

// Q4 Jimmy is scared of the letter Q, write some code that takes in an array of pet objects (name, age, owner) and tells 
// Jimmy's parents if the array contains any pets that have a name or owner with the letter Q. You must use a for..in loop 
// for this.
console.log();
console.log("Question 4 - pet name or owner with a letter Q");

// let hasALetterQ = pets.filter(pet => pet.name.toLowerCase().includes("q")  || pet.owner.toLowerCase().includes("q"));
// console.log(hasALetterQ);

// HOW CAN I USE A FOR IN LOOOOOOOOP?????


function hasALetterQ(pet) {
    for (const key in pet) {
        const element = pet[key].toString().toLowerCase();
        if (element.includes("q")) {
            return true;
        }
    }
}

let hasQ = pets.some(hasALetterQ);

console.log(hasQ);   // output is true or false


