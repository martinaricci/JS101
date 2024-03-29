// Write a function that takes a String of digits, and returns the appropriate number as an integer. 
// You may not use any of the methods mentioned above.

// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). 
// Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

let str = "2781";
let value = 0; 
let num;

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

let stringToInteger = (str) => {
  for (let i = 0; i < str.length; i++) {
    num = Object.values(DIGITS).find(num => num === DIGITS[str[i]]);
    console.log(num);
    value = (value * 10) + num;
  }
  return value;
}

console.log(stringToInteger(str));