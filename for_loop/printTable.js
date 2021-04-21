let readline = require('readline-sync');
function powerOfTwo(NUMBER) {
    for (let index = 0; index <= power; index++) {
        console.log(Math.pow(NUMBER, index));
    }
}
const NUMBER = 2;
let power = readline.question("Enter power to print table of 2\n");
powerOfTwo(NUMBER);