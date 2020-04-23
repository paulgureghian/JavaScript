// Created by Paul A. Gureghian in April 2020 //
// This JS project app calculates the amount of sleep you get each week //

// Define a function which calculates the amount of sleep in any given night.
const getSleepHours = (day) => {

    if (day === "monday") {

        return 8;
    
    } else if (day === "tuesday") {

        return 7;
    
    } else if (day === "wednesday") {

        return 8;
    
    } else if (day === "thursday") {

        return 7;
    
    } else if (day === "friday") {

        return 7;
    
    } else if (day === "saturday") {

        return 6;
    
    } else if (day === "sunday") {

        return 6;
    
    }
    
    return "Error";
    

};