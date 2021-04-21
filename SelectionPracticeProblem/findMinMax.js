const COUNT = 5;
let maxValue = 0;
let minValue = 0;
let index = 1
while(index <= COUNT){
    let number = Math.floor(100 + Math.random() * 900 );
if (index == 1 ){
    maxValue = number;
    minValue = number;
}
if (number < minValue ){
    minValue = number;
}
else if (number > maxValue){
    maxValue = number;
}
index++;
}
console.log("Maximum Value : "+maxValue+" Minimum Value : "+minValue);