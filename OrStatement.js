// let age = 21;
// let isDriving = true;
// let isOnMeds = false;

// if (age < 18) {
//     console.log("You cannot drink because you are under age.")
// } else if (isDriving || isOnMeds) {
//     console.log("You cannot drink!");    
// } else {
//     console.log("You can drink!");
// }

// Notes: did not need to add the age condition in the 'else if' as already checked in the 'if' line

// Restaurant opening times

// let openTime = 1700;
// let closeTime = 2200;
// let isMonday = true;
// let currentTime = 1800;

// if (currentTime < openTime || currentTime > closeTime || isMonday ) {
//     console.log("Sorry the restaurant is closed.");
// } else {
//     console.log("The restaurant is open.")
// }

//
let firstSnack = 0; // "fruit";
let secondSnack = false //"cookies";
let thirdSnack = null //"chocolate";
let fourthSnack = undefined //"lollies";

let whatToEat = firstSnack || secondSnack || thirdSnack || fourthSnack || "Just go for a walk";

console.log(whatToEat);