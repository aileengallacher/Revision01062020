const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    let noughtsAndCrosses = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ];

    for (let row of noughtsAndCrosses) {
        let rowText = `${row[0]} | ${row[1]} | ${row[2]}`;
        for (let column of row) {
            rowText += column;
        }
        console.log(rowText);
    }

    console.log("LET'S PLAY NOUGHTS & CROSSES\n");
    console.log("[1] Row 0, Column 0");
    console.log("[2] Row 0, Column 1");
    console.log("[3] Row 0, Column 2");
    console.log("[4] Row 1, Column 0");
    console.log("[5] Row 1, Column 1");
    console.log("[6] Row 1, Column 2");
    console.log("[7] Row 2, Column 0");
    console.log("[8] Row 2, Column 1");
    console.log("[9] Row 2, Column 2");

    let playersMove = await askQuestion("What is your move?")
    let shouldLoop = true;
    switch (playersMove) {
        case "1":
noughtsAndCrosses.
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "6":
            break;
        case "7":
            break;
        case "8":
            break;
        case "9":
            break;
        default:
            console.log("Invalid move. Try again.");
            let shouldLoop = false;
            break;
    }
}

Program().then(() => {
    process.exit(0);
});