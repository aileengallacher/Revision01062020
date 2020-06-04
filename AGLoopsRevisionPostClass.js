// Q1 Write a for loop that logs all the even numbers between 10 and 16 (inclusive). You must use a continue statement
console.log("* Q1 *");
for (let i = 10; i <= 16; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(i);
}

// Q2 Write a for loop that logs all the odd numbers between 33 and 45 (inclusive) in reverse order. You must use a continue statement.
console.log("* Q2 *");
for (let j = 45; j >= 33; j--) {
    if (j % 2 == 0) {
        continue;
    }
    console.log(j);
}

// Q3 Write a for loop that logs all the numbers from 50 to 100 that when divided by 10 have a remainder of 5. You must use a continue statement.
console.log("* Q3 *");
for (let k = 50; k <= 100; k++) {
    if (k % 10 != 5) {
        continue;
    }
    console.log(k);
}

// Q4 Do all of the above loops using a while loop.
// Q1 Write a while loop that logs all the even numbers between 10 and 16 (inclusive). You must use a continue statement
console.log("Q1 while loop");

let l = 9;
while (l <= 16) {
    l++;
    if (l % 2 == 1) {
        continue;
    }
console.log(l);
}

// Q2 Write a while loop that logs all the odd numbers between 33 and 45 (inclusive) in reverse order. You must use a continue statement.
console.log("Q2 while loop");

let m = 46;
while (m >= 33) {
    m--;
    if (m % 2 == 0) {
        continue;
    }
console.log(m);
}

// Q3 Write a while loop that logs all the numbers from 50 to 100 that when divided by 10 have a remainder of 5. You must use a continue statement.
console.log("Q3 while loop");

let n = 50;
while (n <= 100) {
    n++
    if (n % 10 != 5) {
        continue;
    }
    console.log(n);
    n++;
}