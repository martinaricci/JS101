// Convert a String to a Signed valueber!

// PSEUDOCODE
// input: string
// output: number

// split str and loop through the str of digits
// if str[0] is equal to '-' or '+', remove it
// convert a str of digits to a number
// if the original str had '-' return -number
// else number

const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};


function stringToInteger(str) {
  let value;
  let num = 0;
  let strOfDigits = str.split('');
  strOfDigits[0] === '-' || strOfDigits[0] === '+' ? strOfDigits.shift() : strOfDigits;

  for (let idx = 0; idx < strOfDigits.length; idx++) {
    value = Object.values(DIGITS).find(value => value === DIGITS[strOfDigits[idx]]);
    if (value === undefined) {
      return 'Not a valid number';
    }
    num = (num * 10) + value;
  }

  if (str[0] === '-') {
    return -num;
  }
  return num;
}

console.log(stringToInteger("-4391"));