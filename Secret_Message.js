// Created by Paul A. Gureghian in April 2020. //
// This JS project app uses array methods to transform an array of strings into a secret message. //

// Define an array of strings. //
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get',
                     'easily', 'the', 'first', 'time', 'it', 'is', 'about', 'what',
                     'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Print the array and length. //                     
console.log("The original array:", secretMessage, "\n");                     
console.log("The length of the original array is:", secretMessage.length, 'elements.', "\n");

// Remove the last string element with the '.pop()' array method. //
secretMessage.pop();

// Print the array and length. //
console.log("The array after the last element is removed:", secretMessage, "\n");
console.log("The length of the array after the element is removed is:", secretMessage.length, 'elements.', "\n");

// Add string elements with the '.push()' array method. //
secretMessage.push('to', 'Program.');

//  Print the array and length. //
console.log("The new array after elements are added:", secretMessage, "\n");
console.log("The length of the array after elements are added is:", secretMessage.length, 'elements.', "\n");
    
// Change an element by accessing its index position and replace it. //
secretMessage[7] = 'right';

// Print the array after an element is changed. //
console.log("The new array after the element is changed is:", secretMessage, "\n");

// Use the .shift() array method to remove the first element. //
secretMessage.shift();

// Print the new array and length. //
console.log("The new array after the element is removed is:", secretMessage, "\n");
console.log("The length of the array after the element is removed is:", secretMessage.length, 'elements.', "\n");

// Use the array method '.unshift()' to add a string element to the beginning of the array. //
secretMessage.unshift('Programming');

// Print the new array and length. //
console.log("The new array after adding a new string to the beginning of the array is:", secretMessage, "\n");
console.log("The length of the new array after adding a new string to the beginning is:", secretMessage.length, 'elements.', "\n");

// Use the array method '.splice()' to remove strings and replace them with a new string. //
secretMessage.splice(6, 5, "know,");

// Print the new array and length. //
console.log("The new array after removing the strings and adding a new string is:", secretMessage, "\n");
console.log("The length of the new array after removing the strings and adding a new string is:", secretMessage.length, 'elements.', "\n");

// Use the '.join()' array method and print the Secret Message as a sentence. //
console.log("Use the '.join()' array method to join the secret message array as a sentence.", "\n");
console.log("The secret message is:", secretMessage.join(' '));

// End of Script. //