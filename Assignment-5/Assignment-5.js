alert('Testing')

/*-------------------------------------PART A-------------------------------------------*/

//Store mass and height
const weightPeter = 92;
const heightPeter = 1.95;
const weightLucas = 78;
const heightLucas = 1.69;

//Calculate the BMI
let peterBMI = weightPeter / (heightPeter*heightPeter);
console.log(peterBMI);

let lucasBMI =  weightLucas / (heightLucas*heightLucas);
console.log(lucasBMI);

//Compare Peter and Lucas's BMI
if ( peterBMI > lucasBMI) {
    lucasHigherBMI = false;
}
else {
    lucasHigherBMI = true;
}

console.log(`The BMI of Peter is ${peterBMI}, The BMI of Lucas is ${lucasBMI} , Peter\’s BMI is higher than Lucas\’s BMI that is ${lucasHigherBMI}`);


/*-------------------------------------PART B-------------------------------------------*/

//Celsius convertion
const celsiusTemp = 50;
let fahrenheitTemp = (celsiusTemp*1.8) + 32;
console.log(`${celsiusTemp}\u00B0C is ${fahrenheitTemp}\u00B0F`)

//Fahrenheit convertion
const tempFahrenheit = 70;
let tempCelsius = (tempFahrenheit - 32)*0.5556;
console.log(`${tempFahrenheit}\u00B0F is ${tempCelsius}\u00B0C`)


/*-------------------------------------PART C-------------------------------------------*/

//Output to console
if ( peterBMI > lucasBMI) {
    console.log(`Peter\'s BMI (${peterBMI}) is higher than Lucas\'s (${lucasBMI})!`);
}
else {
    console.log(`Lucas\'s BMI (${lucasBMI}) is higher than Peter\'s (${peterBMI})!`);
}


/*-------------------------------------PART C-------------------------------------------*/

//CovertCelsiusToFahrenheit function
let input1 = 100;
function CovertCelsiusToFahrenheit(input1) {
    return (input1*1.8)+32;
}
console.log(`${input1}\u00B0C is ${CovertCelsiusToFahrenheit(input1)}\u00B0F`);

let input2 = 0;
function CovertCelsiusToFahrenheit(input2) {
    return (input2*1.8)+32;
}
console.log(`${input2}\u00B0C is ${CovertCelsiusToFahrenheit(input2)}\u00B0F`);


let input3 = 10;
function CovertCelsiusToFahrenheit(input3) {
    return (input3*1.8)+32;
}
console.log(`${input3}\u00B0C is ${CovertCelsiusToFahrenheit(input3)}\u00B0F`);


//CovertFahrenheitToCelsius function
let input4 = 32;
function CovertFahrenheitToCelsius (input4) {
    return (input4-32)*0.5556;
}
console.log(`${input4}\u00B0F is ${CovertFahrenheitToCelsius(input4)}\u00B0C`);

let input5 = 10;
function CovertFahrenheitToCelsius (input5) {
    return (input5-32)*0.5556;
}
console.log(`${input5}\u00B0F is ${CovertFahrenheitToCelsius(input5)}\u00B0C`);

let input6 = 102;
function CovertFahrenheitToCelsius (input6) {
    return (input6-32)*0.5556;
}
console.log(`${input6}\u00B0F is ${CovertFahrenheitToCelsius(input6)}\u00B0C`);
