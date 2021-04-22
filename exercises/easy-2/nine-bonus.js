// input: string
// output: number
// the hexadecimal are case sensitive

// Hexadecimal to decimal calculation example:
// F7D
// F: 15 * 16 to the power of 2 --> 15 * 256 --> 3840
// 7: 7 * 16 to the power of 1 --> 7 * 16 --> 112
// D: 13 * 16 to the power of 0 --> 13

// 3840 + 112 + 13 = 3965

// Algorithm:
// declare a const and assign it to an object with keys representing the hexadecimal numbers and the values representing hexadecimal number values
// initialise the hexadecimalToInteger function
// declare a variable called power and set it to the str.length - 1
// declare a variable called result
// make str into an array of strings
// loop through each str in the array and make them all uppercase
// check if any of the str is equal to the HEXADECIMAL_DIGITS object keys
// if it is, get the value of the object key and multiply it for the str.length - 1
// add result to the result variable
// decrease value of power by 1
// return result

const HEXADECIMAL_DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    10: 16
};

let hexadecimalToInteger = (str) => {
    let power = str.length - 1;
    let res = 0;
    let arrayOfStrings = str.split('').map(str => str.toUpperCase());
    console.log(arrayOfStrings);
    for (let idx = 0; idx < arrayOfStrings.length; idx++) {
        if (Object.keys(HEXADECIMAL_DIGITS).includes(arrayOfStrings[idx])) {
            res += HEXADECIMAL_DIGITS[arrayOfStrings[idx]] * Math.pow(16, power);
        }
        power --;
    }
    return res;
};

console.log(hexadecimalToInteger('4D9f'));