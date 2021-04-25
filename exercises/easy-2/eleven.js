// Convert a Number to a String!
// ----------------------------------
// input: number
// output: string

// Data type: object
// declare a variable 'str' that will be assigned to the returned value of the function
// get the individual digits of the whole number and check if each of this digit is equal to the values of the object reprenting a list of keys/values from 0 to 9.
// if it is, str += the key of the object value
// return 'str'

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

console.log(integerToString(4254305));