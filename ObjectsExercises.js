// Q1 - Create an array of objects called libraries. Each should have the following properties: name which should be a string, address which should be a string and headLibrarian which should be an object with properties name and age.
let libraries = [
    {
        name: "Oran Park Library",
        address: "72 Central Ave, Oran Park NSW 2570",
        headLibrarian: {
            name: "Fred Flintstone",
            age: 28
        }
    }, {
        name: "Narellan Library",
        address: "Corner Queen & Elyard Street, Narellan NSW 2567",
        headLibrarian: {
            name: "Barney Rubble",
            age: 45
        },
    }
];
console.log(libraries);

// Q2 - For each Library, add a property called books which sholuld be an array of objects. Each book should have the following properties: title, author, yearOfPublication
libraries[0].books = [{
    title: "Charlotte's Web",
    author: "E.B. White",
    yearOfPublication: 1952
}, {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    yearOfPublication: 1997
}, {
    title: "Matilda",
    author: "Roald Dahl",
    yearOfPublication: 1988
}, {
    title: "The Lamington Man",
    author: "Kel Richards",
    yearOfPublication: 2009
}];

libraries[1].books = [{
    title: "Green Eggs and Ham",
    author: "Dr Seuss",
    yearOfPublication: 1960
}, {
    title: "Harry Potter nd the Deathly Hallows",
    author: "J.K. Rowling",
    yearOfPublication: 2007
}, {
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    yearOfPublication: 1969
}]

// Q3 - Use for..of and/or for..in loops to write the book titles across all the libraries that have been published in the last 20 years.
console.log("Question 3 - Using for.. of books published in the last 20yrs");

for (const library of libraries) {
    for (const booksInLibrary of library.books) {
        if (booksInLibrary.yearOfPublication >= 2000) {
            console.log(booksInLibrary.title);
        }
    }
}


// // Q4 - Use for..of and/or for..in loops to write all of the authors of books that appear in a library with a librarian that is under 30 years old.
console.log("Question 4 - Using for.. of authors of books , from libraries with librarians under 30 yrs");

for (const library of libraries) {
    if (library.headLibrarian.age < 30)
        for (const booksInLibrary of library.books) {
            console.log(booksInLibrary.author);
        }
}

// Q5 - Use for..of and/or for loops to write all the names of libraries that have at least 3 books published before 2000
console.log("Question 5 - Using for..of names of libraries with at least 3 books published before 2000");

// let numberOfBooks = 0;     // first iteration is index 0 finish the loop and count - then index 1 etc
for (const library of libraries) {
    let numberOfBooks = 0;
    for (const booksInLibrary of library.books) {
        if (booksInLibrary.yearOfPublication <= 2000) {
            numberOfBooks++;
        }
    }
    if (numberOfBooks >= 3) {
        console.log(`${library.name} has 3 or more books published before 2000.`);
    }
}