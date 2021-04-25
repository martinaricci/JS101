// Convert a Signed Number to a String!
// ------------------------------------

// input: number 
// iutput: string

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

let integerToString = (num) => {
  let str = '';
  do {
    str = Object.keys(DIGITS).find(key => DIGITS[key] === num % 10) + str;
    num = Math.floor(num / 10);
  } while (num > 0);

  return str;
};

let signedIntegerToString = (num) => {
  let str = '';
  switch (Math.sign(num)) {
    case 1:
      str = `+${integerToString(num)}`;
      break;
    case -1:
      str = `-${integerToString(-num)}`;
      break;
    default:
      str = '0';
  }
  return str;
}

console.log(signedIntegerToString(-2414142144));