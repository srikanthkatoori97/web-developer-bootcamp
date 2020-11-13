let maximum = parseInt(prompt("enter your maximum number"))
const targetnum = Math.floor(Math.random() * maximum) + 1;

while (!maximum) {
    maximum = parseInt(prompt("enter a valid  number"));
}
console.log(targetnum);
let guess = parseInt(prompt("enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetnum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetnum) {
        guess = (prompt("too high! enter a new guess:"));
    }
    else {
        guess = (prompt("too low! enter a new guess:"));
    }


}
if (guess === 'q') {
    console.log("ok you quit ");
} else {
    console.log("congrats you win");
    console.log(`your got correct  in ${attempts} guesses`);
}