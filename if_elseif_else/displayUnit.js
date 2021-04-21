let readline = require('readline-sync');
function displayUnit(unit){
    if (unit == 1)
        console.log("Units");
    else if (unit == 10)
        console.log("Tens");
    else if (unit == 100)
        console.log("Hundreds");        
    else if (unit == 1000)
        console.log("Thousands");
    else if (unit == 10000)
        console.log("Ten Thousands");
    else if (unit == 100000)
        console.log("Lakhs");
    else if (unit == 1000000)
        console.log("Ten Lakhs");
    else if (unit == 10000000)
        console.log("Crores");
    else if (unit == 1000000)
        console.log("Ten Crores");
    else 
        console.log("Invalid number.");
    }
let unit = readline.question("Enter the number between to get unit\n");
displayUnit(unit);
