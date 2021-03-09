const readline = require('readline-sync');

let isInvalidNumber = (number) => {
  return number.toString().trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

let isInvalidInterestrate = (number) => {
  return number.toString().trim() === '' ||
         Number(number) <= 0   ||
         Number.isNaN(Number(number));
}

let isNotPositiveInteger = (number) => {
  return !Number.isInteger(number);
}

let convertStrToNum = (str) => {
  str = Number(str);
}

let answer;

do {

  // =========================================================================
  // LOAN AMOUNT
  let loanAmount = readline.question('How much do you want to borrow?: ');
  // if the user types $ sign in front of the amount remove it from the string 
  if (loanAmount[0] === '$') {
    loanAmount = loanAmount.substring(1);
  }

  convertStrToNum(loanAmount);
  console.log(`$${loanAmount}`);

  while (isInvalidNumber(loanAmount)) {
    console.log('Must be a valid positive number and use numbers only');

    loanAmount = readline.question('How much do you want to borrow?: ');
    if (loanAmount[0] === '$') {
      loanAmount = loanAmount.substring(1);
    }

    convertStrToNum(loanAmount);
    console.log(`$${loanAmount}`);
  }


  // =======================================================================
  // APR
  let APR = readline.question('What is the Annual Percentage Rate?: ');
  // if the user types $ sign in front of the amount remove it from the string
  if (APR[APR.length - 1] === '%') {
    APR = APR.slice(0, -1);
  }
  
  convertStrToNum(APR);
  console.log(`${APR}%`);
  let APRInFranctional = APR / 100;
  console.log(APRInFranctional);

  while (isInvalidInterestrate(APR)) {
    console.log('Must be a valid positive number');
    APR = readline.question('What is the Annual Percentage Rate?: ');

    if (APR[APR.length - 1] === '%') {
      APR = APR.slice(0, -1);
    }

    convertStrToNum(APR);
    APRInFranctional = APR / 100;
    console.log(APRInFranctional);
    console.log(`${APR}%`);
  }


  // =====================================================================
  // YEARS
  let years = Number(readline.question('What is the loan duration in years?: '));
  console.log(years);

  while (isInvalidNumber(years)) {
    console.log('Must be a valid positive number');
    years = Number(readline.question('What is the loan duration in years?: '));
  }

  while (isNotPositiveInteger(years)) {
    console.log('The loan duration must be at least one year.');
    years = Number(readline.question('What is the loan duration in years?: '));
    console.log(years)
  }

  // ====================================================================
  // MONTHLY PAYMENT CALCULATION
  let months = years * 12;
  let monthlyInterestRate = APRInFranctional / 12;
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-months))));
  if (APR === 0) {
    monthlyPayment = loanAmount / months;
  }

  console.log(`Your monthly payment will be: $${Number(monthlyPayment.toFixed(2))}`);

  // ==================================================================
  // DO YOU WANT TO KEEP GOING?
  answer = readline.question("Would you like to do another calculation? \nType 'y' for yes, 'n' for no: ");

  if (answer === 'n') {
    break; 
  }
} while (answer === 'y');