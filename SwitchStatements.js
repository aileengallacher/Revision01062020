// let bookName = 1

// // Switch
// console.log("---Using Switch Statement---\n");
// switch (bookName) {
//     case 1:
//         console.log("The Philosopher's Stone");
//         break;
//     case 2:
//         console.log("The Chamber of Secrets");
//         break;
//     case 3:
//         console.log("The Prisoner of Azkaban");
//         break;
//     case 4:
//         console.log("The Goblet of Fire");
//         break;
//     case 5:
//         console.log("The Order of the Phoenix");
//         break;
//     case 6:
//         console.log("The Half-Blood Prince");
//         break;
//     case 7:
//         console.log("The Deathly Hallows");
//         break;
//     default:
//         console.log("That is not a Harry Potter book from the list.");
//         break;
// }

// // If Else
// console.log("");
// console.log("---Using If/Else Statement---\n");
// if (bookName == 1) {
//     console.log("The Philosopher's Stone");
// } else if (bookName == 2) {
//     console.log("The Chamber of Secrets");
// } else if (bookName == 3) {
//     console.log("The Prisoner of Azkaban");
// } else if (bookName == 4) {
//     console.log("The Goblet of Fire");
// } else if (bookName == 5) {
//     console.log("The Order of the Phoenix");
// } else if (bookName == 6) {
//     console.log("The Half-Blood Prince");
// } else if (bookName == 7) {
//     console.log("The Deathly Hallows");
// } else {
//     console.log("That is not a Harry Potter book from the list.");
// }

// Exercise 2 - Grouping switch statements
let dayOfTheWeek = "Tuesday"
console.log("USING SWITCH STATEMENTS");
switch (dayOfTheWeek) {
    case "Saturday":
        console.log("Ahh, I can finally relax");
        break;
    case "Sunday":
        console.log("Ah well, the weekend is nearly over");
        break;
    case "Thursday":
    case "Friday":
        console.log("Yay, it's almost the weekend");
        break;
    default:
        console.log("Time for work then...");
        break;
}

console.log("USING IF/ELSE STATEMENTS");
if (dayOfTheWeek == "Saturday") {
    console.log("Ahh, I can finally relax");
} else if (dayOfTheWeek == "Sunday") {
    console.log("Ah well, the weekend is nearly over");
} else if (dayOfTheWeek == "Thursday" || dayOfTheWeek == "Friday") {
    console.log("Yay, it's almost the weekend");
} else {
    console.log("Time for work then...");
}
