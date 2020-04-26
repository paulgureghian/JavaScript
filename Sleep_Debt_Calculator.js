// Created by Paul A. Gureghian in April 2020 //
// This JS project app calculates the amount of sleep you get each week //

// Define a function which calculates the amount of sleep in any given night.
const getSleepHours = (day) => {

    if (day === "monday") {

        return 57;
    
    } else if (day === "tuesday") {

        return 0;
    
    } else if (day === "wednesday") {

        return 0;
    
    } else if (day === "thursday") {

        return 0;
    
    } else if (day === "friday") {

        return 0;
    
    } else if (day === "saturday") {

        return 0;
    
    } else if (day === "sunday") {

        return 0;
    
    } 
        
    return "Error";

};

// Define a function which gets the total actual sleep hours. //
const getActualSleepHours = () => getSleepHours("monday") +
    getSleepHours("tuesday") +
    
    getSleepHours("wednesday") +
    
    getSleepHours("thursday") +
    
    getSleepHours("friday") +
    
    getSleepHours("saturday") +
    
    getSleepHours("sunday");

console.log(`Function call to 'getActualSleepHours()': ${getActualSleepHours()} actual hours is the output.`, "\n");

// Define a function for ideal sleep hours.
const getIdealSleepHours = () => {

    let idealHours = 8;
    
    return idealHours * 7;

};    

console.log(`Function call to 'getIdealSleepHours()': ${getIdealSleepHours()} is the ideal number of sleep hours.`, "\n");    

// Define a function which calculates the sleep debt.
const calculateSleepDebt = () => {

    const actualSleepHours = getActualSleepHours();

    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {

        console.log("Function call to 'calculateSleepDebt()': Paul got the perfect amount of sleep.");
    
    } else if (actualSleepHours > idealSleepHours) {

        console.log("Function call to 'calculateSleepDebt()':",`Paul got ${actualSleepHours - idealSleepHours} hour(s) more sleep than needed.`);
    
    } else if (actualSleepHours < idealSleepHours) {

        console.log(`Paul should get ${idealSleepHours - actualSleepHours} hour(s) more of sleep.`);
    
    }

    return "Error.";

};

// Call the 'calculateSleepDebt()'
calculateSleepDebt();

// End of script //