// let carColour = "pink";
// let carPrice = 10500;

// if (carPrice > 50000) {
//     if (carColour == "red") {
//         console.log("I like red cars.");
//     } else {
//         console.log("That's too expensive");
//     }
// } else if (carPrice > 10000) {
//     if (carColour == "blue") {
//         console.log("I like blue cars too.");
//     } else if (carColour == "red") {
//         console.log("I like red cars, and this one's a bargain.");
//     } else {
//         console.log("Hmm, that's a bit too expensive.")
//     }
// } else {
//     console.log("Wow, what a bargain")
// }

let favouriteGenre = "Classical";
let favouritePeriod = "70s";

if (favouriteGenre == "Rock") {
    if (favouritePeriod == "80s") {
        console.log("You should listen to Aerosmith");
    } else if (favouritePeriod == "90s") {
        console.log("You should listen to Pearl Jam");
    } else {
        console.log("You should listen to U2");
    }

} else if (favouriteGenre == "Jazz") {
    if (favouritePeriod == "80s") {
        console.log("You should listen to an 80s jazz artist");
    } else if (favouritePeriod == "60s") {
        console.log("You should listen to a 60s jazz artist");
    } else {
        console.log("You should listen to any jazz artist");
    }
} else {
    console.log("You should listen to Taylor Swift");
}