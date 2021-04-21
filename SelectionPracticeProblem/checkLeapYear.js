let readline = require('readline-sync');
let year = readline.question("Enter year in the format YYYY\n");
if ((year % 4) == 0 || (year % 100) == 0 && (year % 400) == 0)
    console.log("It's a leap year");
else
    console.log("It's not a leap year");