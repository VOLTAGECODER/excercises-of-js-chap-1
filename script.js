// Outputting my name to the console
// console.log("Aleena Ather");

// EX-2.1
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log(typeof str1,  typeof str2, typeof val1, val2, typeof myNum);
//   EX-2.2
let name = "aleena";
let age = 19;
let cancodejavascript=true;
console.log(`Hello, my name is ${name}, and I am ${age} years old.`);
// EX-2.3
const perp= parseFloat(prompt("enter the length of perp side"));
const base= parseFloat(prompt("enter the length of base side"));
const hypotenuse= Math.sqrt(Math.pow(perp,2)+ Math.pow(base,2));
console.log(hypotenuse);
// EX-2.4
let d = 3;
let b = 4;
let c = 5;
console.log(b+d);
console.log(d/c);
c = c%b;
console.log(d,b,c);
// ex-2.5
const heightInInches = parseFloat(prompt("enter height in inches")); 
const weightInPounds =  parseFloat(prompt("enter weight in pounds")); 
const inchesToCentimeters = 2.54;
const poundsToKilos = 0.453592;
const heightInCentimeters = heightInInches * inchesToCentimeters;
const weightInKilos = weightInPounds * poundsToKilos;
const heightInMeters = heightInCentimeters / 100; 
const bmi = weightInKilos / (heightInMeters * heightInMeters);
console.log(`BMI: ${bmi.toFixed(2)}`);


