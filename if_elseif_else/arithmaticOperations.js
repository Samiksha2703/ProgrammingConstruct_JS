let readline = require('readline-sync');
function arithmaticOperation(num1, num2, num3){
    let value1 = num1 + num2 * num3;
    let value2 = num1 % num2 + num3;
    let value3 = num3 + num1 / num2;
    let value4 = num1 * num2 + num3;
    value.push(value1, value2, value3, value4);
    }
    
    let num1 = readline.question("Enter the first number\n");
    let num2 = readline.question("Enter second number\n");
    let num3 = readline.question("Enter the third number\n");
    let value = [];
    arithmaticOperation(num1, num2, num3);
    let maxValue = value[0];
    let minValue = value[0];
    for (let index = 1; index < value.length; index++){
    if (value[index] < minValue)
    minValue = value[index];
    else if (maxValue < value[index])
    maxValue = value[index];
    }
    console.log("Array elements : "+value);
    console.log("Maximum value in array : "+maxValue+"  Minimum value in array : "+minValue);
