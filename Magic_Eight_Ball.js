// Created by Paul A. Gureghian in April 2020 //
/* This JS project app uses the key concept of 'Control Flow' 
   to input a question and output a random fortune. */

// Declare variables 
// Declare a flexible variable for 'userName' 
let userName = 'Paul';

// Create a ternary expression for 'userName'
userName ? console.log(`Hello, $userName`)
: console.log("Hello!");

// Declare a felxible variable for 'userQuestion'
let userQuestion = "Will I succeed?";

// Print the user's question input
console.log(`The user ${userName} asked: ${userQuestion}`);

// Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Declare a flexible variable for 'eightBall'
let eightBall = '';

