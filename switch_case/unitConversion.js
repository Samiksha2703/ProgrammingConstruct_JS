let readline = require('readline-sync');
function unitConversion(input, value) {
    switch (input) {
        case "1":
            let inch = value * 12;
            console.log(+value + " Feet = " + inch + " Inch");
            break;
        case "2":
            let meter = value * 0.3048;
            console.log(+value + " Feet = " + meter + " Meter");
            break;
        case "3":
            let feet = value / 12;
            console.log(+value + " Inch = " + feet + " Feet");
            break;
        case "4":
            let feetMeter = value * 3.28084;
            console.log(+value + " Meter = " + feetMeter + " Feet");
            break;
        default:
            console.log("Invalid input for the conversion");
    }
}
let input = readline.question("Enter \n1 for Feet to Inch \n2 for Feet to Meter \n3 for Inch to Feet \n4 for Meter to Feet\n");
let value = readline.question("Enter value to convert\n");
unitConversion(input, value);