const readline = require('readline-sync');

let isInvalidNumber = (number) => {
  return number.toString().trim() === '' ||
         Number(number) <= 0   ||
         Number.isNaN(Number(number));
};

let isNotValidInteger = (number) => {
  return !Number.isInteger(number) ||
          number === 0;
};

let removeDollarSign = (sign) => {
  if (sign[0] === '$') {
    sign = sign.substring(1);
  }
  return sign;
};

let convertStrToNum = (str) => {
  return Number(str);
};

let removePercentageSign = (sign) => {
  if (sign[sign.length - 1] === '%') {
    sign = sign.slice(0, -1);
  }
  return sign;
};

// get loan amount
let getLoanAmount = () => {
  let numberIsInvalid = true;
  let loanAmount = 0;

  while (numberIsInvalid) {
    loanAmount = readline.question('How much do you want to borrow?: ');
    loanAmount = removeDollarSign(loanAmount);
    loanAmount = convertStrToNum(loanAmount);
    numberIsInvalid = isInvalidNumber(loanAmount);
    if (numberIsInvalid) {
      console.log('Must be a valid positive number and use numbers only');
    }
  }
  console.log(`Loan amount: ${loanAmount}`);
  return loanAmount;
};

// get APR
let getAPR = () => {
  let numberIsInvalid = true;
  let APR = 0;

  while (numberIsInvalid) {
    APR = readline.question('What is the Annual Percentage Rate?: ');
    APR = removePercentageSign(APR);
    APR = convertStrToNum(APR);
    numberIsInvalid = isInvalidNumber(APR);
    if (numberIsInvalid) {
      console.log('Must be a valid positive number');
    }
  }
  console.log(`Interest rate: ${APR}%`);
  return APR;
};

// get loan duration
let getLoanDuration = () => {
  let numberIsInvalid = true;
  let integerIsInvalid = true;
  let years = 0;

  while (numberIsInvalid || integerIsInvalid) {
    years = readline.question('What is the loan duration in years?: ');
    years = convertStrToNum(years);
    numberIsInvalid = isInvalidNumber(years);
    integerIsInvalid = isNotValidInteger(years);
    if (numberIsInvalid) {
      console.log('Must be a valid positive number');
    } else if (integerIsInvalid) {
      console.log('The loan duration must be at least one year.');
    }
  }
  console.log(`Loan duration: ${years}`);
  return years;
};

// calculate months in x years
let calculateMonths = (years) => {
  return years * 12;
};

// calculate monthly interest rate
let getMonthlyInterestRate = (number) => {
  return number / 12;
};

// ask for another calculation
let anotherCalculation = () => {
  while (answer !== 'n' && answer !== 'y') {
    answer = readline.question("Would you like to do another calculation? \nType 'y' for yes, 'n' for no: ");
    if (answer !== 'n' && answer !== 'y') {
      console.log('Please give a valid answer.');
    }
  };
  
  return answer === 'y' ? true : false;
}

let answer = 'y';
do {
  console.log('Welcome to the mortgage calculator!');
  let loanAmount = getLoanAmount();
  let APR = getAPR();
  let APRInFranctional = APR / 100;
  let years = getLoanDuration();

  // MONTHLY PAYMENT CALCULATION
  let months = calculateMonths(years);
  let monthlyInterestRate = getMonthlyInterestRate(APRInFranctional);
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-months))));
  if (APR === 0) {
    monthlyPayment = loanAmount / months;
  }

  console.log(`Your monthly payment will be: $${Number(monthlyPayment.toFixed(2))}`);

  // DO YOU WANT TO KEEP GOING?
  answer = '';
  anotherCalculation();

} while (anotherCalculation());