let people = [
    {
        firstName: "Margaret",
        lastName: "Cox",
        age: 35
    }, {
        firstName: "Asma",
        lastName: "Bauer",
        age: 29
    }, {
        firstName: "Aaryan",
        lastName: "Molloy",
        age: 22
    }, {
        firstName: "Jazmin",
        lastName: "Flowers",
        age: 22
    }
];

function sortByAge(person1, person2) {
    return person1.age - person2.age;
}

function sortByLastName(person1, person2) {
    if (person1.lastName.toLowerCase() < person2.lastName.toLowerCase()) {
        return -1;
    } else if (person1.lastName.toLowerCase() > person2.lastName.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}

let peopleSortedByAge = people.sort(sortByLastName).sort(sortByAge);
console.log(peopleSortedByAge)