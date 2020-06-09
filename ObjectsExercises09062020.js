// Create an array of objects called schools. Each school should have the following properties: name (string), address (string), headTeacher (object: title(string), lastName(string))

// Add a property called students to each schoolwhich is an object array. Each student has the following properties: firstName (string), lastName (string), age (number), yearGroup (number)

// Add a property called teachers to each school which is an object array. Each teacher has the following properties: title (string), lastName (string), subject (string)

let schools = [{
    name: "St Justins Oran Park",
    address: "94 Oran Park Dr, Oran Park NSW 2570",
    headTeacher: "Fred Flintstone"
}, {
    name: "St Pauls Camden",
    address: "20 Mitchell St Camden NSW 2570 ",
    headTeacher: "George Jetson"
}, {
    name: "Oran Park Public School",
    address: "390 South Cct, Oran Park NSW 2570",
    headTeacher: "Lisa Simpson"
}];

schools[0].students = [{
    firstName: "Aileen",
    lastName: "Gallacher",
    age: 7,
    yearGroup: 2,
}, {
    firstName: "John",
    lastName: "Doe",
    age: 5,
    yearGroup: 1,
}, {
    firstName: "Jane",
    lastName: "Citizen",
    age: 10,
    yearGroup: 4,
}]

schools[1].students = [{
    firstName: "Pebbles",
    lastName: "Flinstone",
    age: 8,
    yearGroup: 2,
}, {
    firstName: "Maggie",
    lastName: "Simpson",
    age: 8,
    yearGroup: 2,
}, {
    firstName: "Jack",
    lastName: "Black",
    age: 15,
    yearGroup: 10,
}]

schools[2].students = [{      // should appear for Q3
    firstName: "Harry",
    lastName: "Potter",
    age: 12,
    yearGroup: 7,
}, {
    firstName: "Gold",
    lastName: "Fish",
    age: 17,
    yearGroup: 12,
}, {
    firstName: "Kitty",     // Should appear for Q3
    lastName: "Cat",
    age: 12,
    yearGroup: 7,
}, {
    firstName: "Betty",
    lastName: "Boop",
    age: 8,
    yearGroup: 2,
}, {
    firstName: "Trixie",
    lastName: "Fish",
    age: 5,
    yearGroup: 1,
}, {
}]

schools[0].teachers = [{
    firstName: "Jane",
    lastName: "Doe",
    subject: "Maths"
}, {
    firstName: "John",
    lastName: "Doe",
    age: 5,
    subject: "English"
}]

schools[1].teachers = [{
    firstName: "Sally",
    lastName: "Smith",
    subject: "Science"
}, {
    firstName: "Hannah",
    lastName: "Banana",
    age: 5,
    subject: "Maths"
}]

schools[2].teachers = [{
    firstName: "Michael",
    lastName: "Jones",
    subject: "Religion"
}, {
    firstName: "Debbie",
    lastName: "Hunt",
    age: 5,
    subject: "English"
}]

// Q1 - Use for..of loop(s) to write out all the students with a yearGroup greater than 9
console.log(),
    console.log("Question 1 - all students with a year group greater than 9");

for (const school of schools) {
    for (const student of school.students) {
        if (student.yearGroup >= 9) {
            console.log(`${student.firstName} ${student.lastName} in year group: ${student.yearGroup}`);
        }
    }
}

// Q2 - Use for..of loop(s) to write out all the teachers that work at a school with 4 students or less
console.log(),
    console.log("Question 2 - all teachers that work at a school with 4 students or less");

for (const school of schools) {
    if (school.students.length <= 4) {
        console.log(school.name);
        console.log(school.teachers);
    }
}


// Q3 Use for..of loop(s) to write out the full names of all students who have an age of 12 and a yearGroup of 7
console.log(),
    console.log("Question 3 - full names of students age == 12 && yearGroup == 7");
for (const school of schools) {
    for (const student of school.students) {
        if (student.age == 12 && student.yearGroup == 7) {
            console.log(`${student.firstName} ${student.lastName}`);
        }
    }
}

// Q4 Use for..of loop(s) and any other method you know to log how many students are in each yearGroup across all schools (assume yearGroup is a whole number from 0 - 12)
console.log(),
    console.log("Question 4 - log how many students in each year group across all schools");

let yearGroupArray = new Array();
for (let i = 0; i <= 12; i++) {    // 12 is the number of yer grades 0-12
    yearGroupArray.push(0);        // this will fill the yearGroupArray with the number for each year after iterating through the first array called on line62
    ;
}
for (const school of schools) {
    for (const student of school.students) {
        yearGroupArray[student.yearGroup]++;   // iterates through yearGroup values and ++ to create new array
    }                                          // [student.yearGroup] indicates the index so yearGroupArray[0], then [1]
}

// outputs the results from the yearGroupArray

for (let i = 0; i < yearGroupArray.length; i++) {
    if (i === 0) {
        console.log(`There are ${yearGroupArray[i]} students in Kindy.`);
    } else {
        console.log(`There are ${yearGroupArray[i]} students in Year ${i}.`);
    }
}