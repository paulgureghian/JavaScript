// Created by Paul A. Gureghian in April 2020 //
// This JS app converts Kelvin to Celsius then to Fahrenheit //

// Declare variables 
// Declare a constant variable for Kelvin 
const kelvin = 293;

// Declare a constant variable for converting Kelvin to Celsius  
const celsius = kelvin - 273;  

// Declare a flexible variable for converting Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Round down Fahrenheit after conversion from Celsius  
fahrenheit = Math.floor(fahrenheit);  

// Print the temperature in Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//  Convert Celsius to Newton
// Declare a flexible variable for converting Celsius to Newton
let newton = celsius * (33/100);

// Round down Newton after conversion from Celsius 
newton = Math.floor(newton);

// Print the temperature in Newton
console.log(`The temperature is ${newton} degrees Newton.`); 

// End of script