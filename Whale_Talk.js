// Created by Paul A. Gureghian in April 2020. //
// This JS project app translates phrases into their "Whale Talk" equivalent. //
// Key concept used in this script app is 'For Loops'. //

// Start of script. //

console.log("Through the use of 'for loops' in JS, human talk will be translated to whale talk.", "\n");
console.log("The human talk used will be: 'JavaScript uses 'for loops'.", "\n");

// Declare a variable to store the input phrase. //
const humanInput = "JavaScript uses 'For Loops'";

// Declare a variable to store an array of vowels. //
const vowels = ["a", "e", "i", "o", "u"];

// Declare a variable to store the vowels from the input. //
let whaleTalkArray = [];

// Create a 'for loop' to iterate through the input string and vowel array. //
console.log("The output of humanInputIndex and vowelIndex is:", "\n");
for (let humanInputIndex = 0; humanInputIndex < humanInput.length; humanInputIndex++) {

    console.log("The index position of each character in the human input string are:");
     console.log("humanInputIndex =", humanInputIndex, "\n");

    // Nested 'for loop' to iterate through the 'vowels' array. //
    for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {

        if (humanInput[humanInputIndex] === vowels[vowelIndex]) {

            if (humanInput[humanInputIndex] === 'e') {

                whaleTalkArray.push('ee');
            
            } else if (humanInput[humanInputIndex] === 'u') {
               
                whaleTalkArray.push('uu');
            
            } else {
                
                whaleTalkArray.push(humanInput[humanInputIndex]);
            
            }                        
        } 
         console.log("The index position of the vowels array are:");   
         console.log("vowelIndex =", vowelIndex, "\n");
    
 } 
} 

console.log("After the 'whaleTalkArray' is populated, the commas are removed and the characters are capitalized.", "\n");
console.log("The human talk translated to whale talk is:", whaleTalkArray.join("").toUpperCase());

// End of script. //