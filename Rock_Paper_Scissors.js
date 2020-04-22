// Created by Paul A. Gureghian in April 2020 //
// This JS project app runs the classic two player game of Rock, Paper, Scissors //

// Define a 'const' function for user choice.
const getUserChoice = (userInput) => {

    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {

        return userInput;

    } 
    console.log("Error, please type: rock, paper, or scissors.");
              
};

// Define a 'const' function for computer choice. 
const getComputerChoice = () => {

    const randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {

    case 0: 
        return "rock";
    case 1:
        return "paper";
    case 2: 
        return "scissors";
    
    }

};

// Define a 'const' function for determining a winner.
const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {

        return "This game is a tie";
    
    } 
    if (userChoice === "rock") {

        if (computerChoice === "paper") {

            return "The winner is the computer";
        
        } 
        
        return "The winner is the user";
        
    }

    if (userChoice === "paper") {

        if (computerChoice === "scissors") {

            return "The winner is the computer";
        
        } 
        
        return "The winner is the user";
        
    }

    if (userChoice === "scissors") {

        if (computerChoice === "rock") {

            return "The winner is the computer";
        
        } 
        
        return "The winner is the user";
        
    }

};

// Define a function named 'playGame()' which starts the game.
const playGame = () => {
    const userChoice = getUserChoice('paper');
    console.log(`The user's choice is: ${userChoice}.`);

    const computerChoice = getComputerChoice();
    console.log(`The computer's choice is: ${computerChoice}.`);
}