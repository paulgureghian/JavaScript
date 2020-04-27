// Created by Paul A. Gureghian in April 2020. //
// This JS projct app sends a message about athletic events and the number days training needed. //

// Declare a variable to store a random number between 0 and 2. //
const random = Math.floor(Math.random() * 3);

// Define a function to generate a random event. //
const getRandEvent = () => {

    if (random === 0) {

        return "Marathon";
    
    } else if (random === 1) {                                                 

        return "Triathlon";
    
    } else if (random === 2) {

        return "Pentathlon";
    
    }

    return "Error";

};

// Define a function to determine the number of training days for an event. //
const getTrainingDays = (event) => {
    
    let days = 0;

    if (event === "Marathon") {

        days = 50;
    
    } else if (event === "Triathlon") {

        days = 100;
    
    } else if (event === "Pentathlon") {

        days = 200;
    
    }

    return days;
    
};

// Declare a variable to store names. //
const name = "Paul";

// Define a function to print the athlete's name and event. //
const logEvent = (name, event) => {
    
    console.log("Function call to 'logEvent()':");
    console.log(`${name}'s event is: ${event}.`, "\n");        
    
};

// Define a function to print the athlete's name and number of training days for the event. //
const logTime = (name, days) => {

    console.log("Function call to 'logTime()':");
    console.log(`${name}'s time to train is: ${days} days.`, "\n");   

};

// Function call to 'getRandEvent()'. //
const event = getRandEvent();

// Function call to 'getTrainingDays()'. //
const days = getTrainingDays(event);

// Function call to 'logEvent()'. //
logEvent(name, event);   

// Function call to 'logTime()'. //
logTime(name, days);
      

// Second athlete's event and training days. //

// Declare a variable to store names. //
const name2 = "Jack";

// Function call to 'getRandEvent(). //
const event2 = getRandEvent();

// Function call to 'getTrainingDays(). //
const days2 = getTrainingDays(event2);

// Function call to 'logEvent()'. // 
logEvent(name2, event2);  

// Function call to 'logTime()'. //
logTime(name2, days2);
        
// End of script. //