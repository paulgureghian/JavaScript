// Created by Paul A. Gureghian in April 2020 //
// This JS app converts human age into dog years //

// Declare variables
// Declare a constant variable for my human age 
const myAge = 55;

// Declare a flexible variable for early years
let earlyYears = 2;

// Multiply 'early years' by 10.5 
earlyYears *= 10.5;

// Subtract 2 from 'myAge' 
let laterYears = myAge - 2;

// Multiply 'laterYears' by 4 
laterYears *= 4;

// Print 'earlyYears'
console.log(earlyYears);

// Print 'laterYears'
console.log(laterYears);

// Add 'earlyYears' and 'laterYears' 
let myAgeInDogYears = earlyYears + laterYears;

// My name as a string in LowerCase()
let myName = "Paul".toLowerCase();

// Print name and age in dog years
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);

