let age = 18;
let isDriving = true;

if (age < 18 || isDriving) {
    console.log("You're too young to drink!");
} else if (age >= 18 || isDriving) {
    console.log("You cannot drink as you're driving!");     // will output if one of the above conditions equates to true
} else {
    console.log("You can drink!");
}