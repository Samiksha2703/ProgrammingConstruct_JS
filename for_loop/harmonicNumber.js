let readline = require('readline-sync');
function findHarmonicNumber(userInput) {
    for (let index = 1; index <= userInput; index++) {
        harmonicNumber += 1 / index;
    }
}
let userInput = readline.question("Enter the number to print harmonic number\n");;
let harmonicNumber = 0;
findHarmonicNumber(userInput);
console.log("Harmonic number is : " + harmonicNumber);