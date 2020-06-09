// let person = {
//     name: "Aileen",
//     age: 7
// };  // declaring an object - the object literal syntax

// console.log(person);
// console.log(person.name);

// person.name = "Ayla";     // reassigning the property 'name' value in the obj 'person'
// console.log(person);

// person.lastName = "Gallacher";    // adding a new property 'lastName' with in the obj 'person'
// // or add a new property this way:
// person["favColour"] = "purple";
// person["favSports"] = ["soccer","swimming"];
// console.log(person);

// person.friends = ["Wynter", "Yowie", "Bella"]
// console.log(person);

// console.log(person.friends[2]);  // to log the 2nd index in the array of friends in obj property (output is Bella)

// for (let i = 0; i < person.friends.length; i++) {   
//     console.log(person.friends[i]);      // will output all the elements in the friends array
// }



// Q1 - Create an object called pet with 2 properties. name and age
console.log("Q1 - Create an object called pet with 2 properties. name and age");
let pet = {
    name: "Muddy",
    age: 10
};
console.log(pet)
// Q2 - Add an array as a property called owners that lists all the people that live with/own the pet
console.log("Q2 - Add an array as a property called owners");

pet.owners = ["Aileen", "Shannon", "Ayla", "Aubree", "Mason"];
console.log(pet)
// Q3 - Loop through the owners property and log all the names of owners
console.log("Q3 - Loop through owners property and log all names of owners");

for (let i = 0; i < pet.owners.length; i++) {
    console.log(pet.owners[i]);
}


// Q4 - Create a new object using the new Object syntax.
console.log("Q4 - Create new object using new object syntax");
let car = new Object;
console.log(car);
// Q5 - Add a property to the object using the square bracket accessor
console.log("Q5 - add a property using []");
car["colour"] = "black";

console.log(car);
// Q6 - Add another property to the object using the dot accessor
console.log("Q6 - add a property using dot accessor");
car.brand = "BMW";

console.log(car);
// Q7 - use a for..in to log all the keys and values in the object declared in Q4
console.log("Q7 -use for in loop to log all the keys & values in q4 obj");
for (const key in car) {
    console.log(`${key} has value: ${car[key]}`);
}
