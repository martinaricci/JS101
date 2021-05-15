// When Will I Retire?

// calculate how many more years you have before you retire:
// subtract the retirement age to the current age

// calculate what year will be when you retire:
// add the years until retirement to the current year

let readlineSync = require('readline-sync');

let age = Number(readlineSync.question(`What is your age? `));
let retirementAge = Number(readlineSync.question(`At what age would you like to retire? `));

let calculateRetirement = () => {
    let today = new Date();
    let currentYear = today.getFullYear();
    let yearsLeft = retirementAge - age;

    let yearsToRetirement = currentYear + yearsLeft;
    return `It's ${currentYear}. You will retire in ${yearsToRetirement}. \nYou have only ${yearsLeft} years of work to go!`
};

console.log(calculateRetirement());