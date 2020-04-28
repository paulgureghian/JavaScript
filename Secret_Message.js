// Created by Paul A. Gureghian in April 2020. //
// This JS project app uses array methods to transform an array of strings into a secret message. //

// Define an array of strings. //
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get',
                     'easily', 'the', 'first', 'time', 'it', 'is', 'about', 'what',
                     'you', 'can', 'figure', 'out', '-2015', 'Chris', 'Pine', 'Learn', 'JavaScript'];

// Print the array and length. //                     
console.log("The array:", secretMessage, "\n");                     
console.log("The length of the original array:", secretMessage, "\n");

// Remove the last string element with an array method. //
secretMessage.pop();

// Print the array and length. //
console.log("The array after last element removed:", secretMessage, "\n");
console.log("The length of the array after element removed:", secretMessage, "\n");

