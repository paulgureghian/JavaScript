// Created by Paul A. Gureghian in April 2020 //
// This JS projct app sends a message about Training Days events //

// The scope of 'random' is too loose
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
    if (random === 0){
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon'
    }
};

// The scope of 'days' is too tight
const getTrainingDays = event => {
    
    let days;

    if(event === 'Marathon') {
        let days = 50;
    } else if (event === 'Triathlon') {
        let days = 100;
    } else if (event === 'Pentathlon') {
        let days = 200;
    }

    return days;
    
};