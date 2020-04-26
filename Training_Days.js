// Created by Paul A. Gureghian in April 2020 //
// This JS projct app sends a message about Training Days events //

// The scope of 'random' is too loose
const random = Math.floor(Math.random() * 3);

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

// The scope of 'days' is too tight
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

const name = "Paul";

// The scope of name is too tight
const logEvent = (name, event) => {

    console.log(
        `${name}'s event is: ${event}.`,
        "\n"
    );

};

const logTime = (name, days) => {

    console.log(
        `${name}'s time to train is: ${days} days.`,
        "\n"
    );

};

const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(
    name,
    event
);
logTime(
    name,
    days
);


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);

const name2 = "Jack";

logEvent(
    name2,
    event2
);
logTime(
    name2,
    days2
);

// End of script//