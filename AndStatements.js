let openTime = 1700 ;
let closingTime = 2200 ;
let currentTime = 1800;

if (currentTime > openTime && currentTime < closingTime) {
    console.log("The restaurant is open!");
} else {
    console.log("It is outside the opening hours. The restaurant is closed.")
}