let readline = require('readline-sync');
function dispayDay(dayNumber){
    if (dayNumber == 0)
        console.log("Sunday");
    else if (dayNumber == 1)
        console.log("Monday");
    else if (dayNumber == 2)
        console.log("Tuesday");        
    else if (dayNumber == 3)
        console.log("Wednesday");
    else if (dayNumber == 4)
        console.log("Thursday");
    else if (dayNumber == 5)
        console.log("Friday");
    else if (dayNumber == 6)
        console.log("Saturday");
    else 
        console.log("Invalid number.");
    }
let dayNumber = readline.question("Enter the number between 1-7\n");
dispayDay(dayNumber);