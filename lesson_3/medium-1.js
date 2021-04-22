// Write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it.
let num = 0; 
let asciiArt = (str) => {
    while (num < 10) {
        console.log(' '.repeat(num) + str);
        num++;
    }
}

asciiArt('The Flintstones Rock!');


// ----------------
// Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters:

let newStr = '';
let swapCase = (str) => {
    for (let i = 0; i < str.length; i++) {
        newStr += str[i].match(/[a-z]/) ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    return newStr;
}

console.log(swapCase(munstersDescription));


let number = 5;

do {
  number = Math.floor(10 * Math.random());
  console.log(number);
} while (number !== 5);

console.log('Exiting...');