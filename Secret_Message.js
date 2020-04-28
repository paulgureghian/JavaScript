// Created by Paul A. Gureghian in April 2020. //
// This JS project app uses array methods to transform an array of strings into a secret message. //

// Define an array of strings. //
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get',
                     'easily', 'the', 'first', 'time', 'it', 'is', 'about', 'what',
                     'you', 'can', 'figure', 'out', '-2015', 'Chris', 'Pine', 'Learn', 'JavaScript'];

// Print the array and length. //                     
console.log("The original array:", secretMessage, "\n");                     
console.log("The length of the original array is:", secretMessage.length, 'elements.', "\n");

// Remove the last string element with the '.pop()' array method. //
secretMessage.pop();

// Print the array and length. //
console.log("The array after the last element is removed:", secretMessage, "\n");
console.log("The length of the array after the element is removed is:", secretMessage.length, 'elements.', "\n");

// Add string elements with the '.push()' array method. //
secretMessage.push('to', 'Program');

//  Print the array and length. //
console.log("The new array after elements are added:", secretMessage, "\n");
console.log("The length of the array after elements are added is:", secretMessage.length, 'elements.', "\n");
    
