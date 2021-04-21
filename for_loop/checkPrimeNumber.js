let readline = require('readline-sync');
function checkPrimeNumber(number) {
    if (number <= 1) {
        flag = 0;
        return;
    }
    if (number === 2) flag == 1;
    for (let j = 2; j < number; j++) {
        if (number % j == 0) {
            flag = 1;
            break;
        }
    }
}

let flag = 0
let integer = readline.question("Enter the number to check whether number is prime or not\n");
checkPrimeNumber(integer);
if (flag == 0)
    console.log("The number is prime");
else
    console.log("The number is not prime");