// Created by Paul A. Gureghian in April 2020. //
// This JS project app translates phrases into their "Whale Talk" equivalent. //
// Key concept used in this script app is 'For Loops'. //

// Start of script. //

// Declare a variable to store the input phrase. //
const input = "JavaScript uses 'For Loops' ";

// Declare a variable to store an array of vowels. //
const vowels = ["a", "e", "i", "o", "u"];

// Declare a variable to store the vowels from the input. //
let resultArray = [];

// Create a 'for loop' to iterate through the input string and vowel array. //
console.log("The output of inputIndex and vowel is:", "\n");
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {

    //console.log("inputIndex =", inputIndex, "\n");

    // Nested 'for loop' to iterate through the 'vowels' array. //
    for (let vowel = 0; vowel < vowels.length; vowel++) {

        if (input[inputIndex] === vowels[vowel]) {

            if (input[inputIndex] === 'e') {

                resultArray.push('ee');
            }
            else if (input[inputIndex] === 'u') {
                resultArray.push('uu');
            }  

            else {
                resultArray.push(input[inputIndex]);
            }
        } 
    
    
        //console.log("vowel =", vowel, "\n");
    
 }
} 


console.log(resultArray.join("").toUpperCase());

// End of script. //