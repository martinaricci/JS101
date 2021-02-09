// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet.

var readlineSync = require('readline-sync');
 
// Wait for user's response.
let roomLength = readlineSync.question('What is the length of your room? ');
let roomWidth = readlineSync.question('And what is the width of your room? ');

let squareMeters = roomLength * roomWidth;
let squareFeet = squareMeters * 10.764;

console.log(`Your room is: ${squareMeters.toFixed(2)} square meters or ${squareFeet.toFixed(2)} square feet`);