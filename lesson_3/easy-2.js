// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.replace('important', 'urgent');


// ----------------
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
// console.log(reversedArray);

numbers = [1, 2, 3, 4, 5];
reversedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(reversedArray);


// ------------------------
// Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));


// -------------------------
// Starting with the string:

// let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";

console.log('Four score and'.concat(' ', famousWords));
console.log(`Four score and ${famousWords}`);


// -------------------------
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
// console.log(numbers);


// -------------------------
let flintstones = ["Fred", "Wilma"];

console.log(flintstones.concat(["Barney", "Betty"], ["Bambam", "Pebbles"]));

// -------------------------
// Consider the following object:

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// Create an array from this object that contains only two elements: Barney's name and Barney's number:

// [ 'Barney', 2 ]

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney")[0]);

// ------------------------
// How would you check whether the objects assigned to variables numbers and table below are arrays?

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

// -----------------------
// Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));

// -----------------------
// Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split("t").length - 1);
console.log(statement2.split("t").length - 1);