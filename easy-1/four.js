// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet.

// Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.

var readlineSync = require('readline-sync');
 
// Wait for user's response.
let roomLength = readlineSync.question('What is the length of your room? ');
let roomWidth = readlineSync.question('And what is the width of your room? ');
let inputType = readlineSync.question('Would you like to know the area in meters or feet? ');

let squareMeters = roomLength * roomWidth;
let squareFeet = squareMeters * 10.764;

if (inputType === 'meters') {
    console.log(`Your room is: ${squareMeters.toFixed(2)} square meters`)
} else {
    console.log(`Your room is: ${squareFeet.toFixed(2)} square feet`)
}

// console.log(`Your room is: ${squareMeters.toFixed(2)} square meters or ${squareFeet.toFixed(2)} square feet`);