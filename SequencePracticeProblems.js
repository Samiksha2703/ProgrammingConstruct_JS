//1. Generate single digit random number
function generateSingleDigitNumber() {
    let number = Math.floor(Math.random() * 10) % 10;
    console.log("Ranodm Single Digit Number is : " + number);
}
generateSingleDigitNumber();

//2. Generate dice number between 1 to 6
function generateDiceNumber() {
    return Math.floor(Math.random() * 10) % 6 + 1;
}
let number = generateDiceNumber();
console.log("Dice Number : " + number);

//3. Add two random dice number
let num1 = generateDiceNumber();
let num2 = generateDiceNumber();
let sum = num1 + num2;
console.log("Addition of two random dice number is : " + sum);

//4. Sum and average of five two digit random number
function generateTwoDigitNumber() {
    return Math.floor(10 + Math.random() * 90);
}
let num = 0;
let count = 0;
let sumOfFive = 0;
while (count < 5) {
    count++;
    num = generateTwoDigitNumber();
    sumOfFive += num;
}
let avg = sumOfFive / count;
console.log("sum :" + sumOfFive);
console.log("avg : " + avg);

//5 Unit Conversion
//5A. 1ft = 12 inch then 42 inch = ? ft
function convertIntoFeet(heigthInFeet) {
    return heigthInFeet / 12;
}
let heightInInch = convertIntoFeet(42);
console.log("42 inch = " + heightInInch + " ft");

//5B. Rectangular Plot of 60 feet x 40 feet in meters
function convertFeetIntoMeter(input) {
    return input * 0.3048;
}
let length = 60;
let width = 40;
let lengthInMeter = convertFeetIntoMeter(length);
let widthInMeter = convertFeetIntoMeter(width);
console.log("Area in meters : " + lengthInMeter + " m X " + widthInMeter + " m");

//5C. calculate area of plots in acres
function calculateArea(length, width) {
    return convertFeetIntoMeter(length) * convertFeetIntoMeter(width);
}

function convertIntoAcres(areaOf25Plots) {
    return areaOf25Plots * 0.000247105;
}
let area = calculateArea(length, width);
let areaOf25Plots = area * 25;
let areaInAcres = convertIntoAcres(areaOf25Plots);
console.log("Area of 25 plotes in acres is " + areaInAcres);
