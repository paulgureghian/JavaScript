// Created by Paul A. Gureghian in April 2020 //
// This JS project app uses the key concept of 'Control Flow' 
// To input a question and output a random fortune. 

// Declare variables 
// Declare a flexible variable for 'userName' 
let userName = "Paul";

// Create a ternary expression for 'userName'
userName  
    ? console.log(`Hello, ${userName}`) 
    : console.log("Hello!");
    
// Declare a felxible variable for 'userQuestion'
let userQuestion = "Will I succeed?";

// Print the user's question input
console.log(`The user ${userName} asked: ${userQuestion}`);

// Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Declare a flexible variable for 'eightBall'
let eightBall = "";

// Create a control flow with the 'switch' statement
switch (randomNumber) {

case 0:
    eightBall = "It is certain";
    break;
case 1: 
    eightBall = "It is decidedly so";
    break;
case 2:
    eightBall = "Reply hazy try again";
    break;
case 3: 
    eightBall = "Cannot predict now";
    break;
case 4: 
    eightBall = "Do not count on it";
    break;
case 5: 
    eightBall = "My sources say no";
    break;
case 6: 
    eightBall = "Outlook not so good";
    break;
case 7:
    eightBall = "Signs point to yes";
    break;                             

}

// Print Magic Eight Ball's answer.
console.log(eightBall);

// End of script //