let readline = require('readline-sync');
const START_DATE = 2292020;
const END_DATE = 7012020;
let date = readline.question("Enter date in the format mmddYYYY\n");
if (START_DATE < date && END_DATE > date)
    console.log("Entered date is in the range");
else
    console.log("Entered date is not in the range");