let people = [
    {
        name: "Aileen",
        age: 37,
        pet: {
            name: "Pocket",
            age: 10
        }
    }, {
        name: "Shannon",
        age: 38,
        pet: {
            name: "Muddy",
            age: 12
        }
    }
];

for (const person of people) {
    console.log(`${person.name} is ${person.age} years old.`);
    console.log(`${person.name} has a pet dog called ${person.pet.name}.`);
}

for (const person of people) {
    if (person.pet.age > 10) {     // will only log if pet age is > 10
        console.log(`${person.name} is ${person.age} years old.`);
        console.log(`${person.name} has a pet dog called ${person.pet.name}.`);
    }
}
