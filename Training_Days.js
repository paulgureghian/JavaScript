// Created by Paul A. Gureghian in April 2020 //
// This JS projct app sends a message about Training Days events //

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

const getTrainingDays = () => {
    
}