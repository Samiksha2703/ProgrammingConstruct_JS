let readline = require('readline-sync');
function primeNumberInRange(lowwerLimit, upperLimit) {
    for (let i = lowwerLimit + 1; i < upperLimit; i++) {
        flag = 0;
        if (i <= 1) {
            flag = 1;
        }
        if (i === 2) flag = 0;
        if (i > 2) {
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    flag = 1;
                    break;
                }
            }
        }
        if (flag === 0) {
            console.log(i)
        }
    }
}

let flag;
let lowwerLimit = parseInt(readline.question("Enter the number for lower limit\n"));
let upperLimit = parseInt(readline.question("Enter the number for upper limit\n"));
primeNumberInRange(lowwerLimit, upperLimit);
