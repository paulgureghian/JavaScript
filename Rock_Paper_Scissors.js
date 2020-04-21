// Created by Paul A. Gureghian in April 2020 //
// This JS project app runs the classic two player game of Rock, Paper, Scissors //

// Define a 'const' function for user choice.
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput

    } else {
        console.log('Error, please type: rock, paper, or scissors.');
    }          
}

// Define a 'const' function for computer choice. 
const getComputerChoice = () => {
    
}