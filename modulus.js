// // // % modulus/remainder

// // // for (let i = 9; i <= 17; i++) {
// // //     if (i % 2 == 1) {
// // //         console.log(i);
// // //     }

// // // }

// // // Q1 for loop that logs all the even numbers between 10 and 16 inclusive, use continue
// console.log("Question 1");

// for (let i = 10; i <= 16; i++) {
//     if (i % 2 == 1) {
//         continue;
//     }
//     console.log(i);
// }


// // // Q2 for loop that logs all the odd numbers between 33 and 45 inclusive in reverse order, use continue
// console.log("Question 2");

// for (let j = 45; j >= 33; j--) {
//     if (j % 2 == 0) {
//         continue;
//     }
//     console.log(j);
// }


// // // // Q3 for loop that logs all the numbers from 50 to 100 that when divided by 10 have a remainder of 5
// console.log("Question 3");

// for (let k = 50; k <= 100; k++) {
//     if (k % 10 != 5) {
//         continue;
//     }
//     console.log(k);
// }

// // // // Q4 all the above using while loops 
// // logs all the even numbers between 10 and 16 inclusive, use continue
// console.log("Question 1 - While loop");

// let m = 9
// while (l <= 16) {
//     l++;
//     if (l % 2 == 1) {
//         continue;
//     }
//     console.log(l);
//     l++;
// }

// // // Q2 while loop that logs all the odd numbers between 33 and 45 inclusive in reverse order, use continue
// console.log("Question 2 - while loop");

// let n = 46;
// while (n >= 33) {
//     n--;
//     if (n % 2 == 0) {
//         continue;
//     }
//     console.log(n);
// }

// Q3 while loop that logs all the numbers from 50 to 100 that when divided by 10 have a remainder of 5
console.log("Question 3 - while loop");

let o = 50;
while (o <= 100) {
    o++;
    if (o % 10 == 5) {
        continue;
    }
    console.log(o);
}
