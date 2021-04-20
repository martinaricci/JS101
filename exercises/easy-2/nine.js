// Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.


// MY FIRST SOLUTION (which is wrong because it's returning an array of numbers)

let str = "32232781";
let num = 0;

const DIGITS = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9
}

for (let i = 0; i < str.length; i++) {
    if (Object.keys(DIGITS).includes(str[i])) {
        console.log(str[i]);
        return str[i];
    }
}


// stringToInteger = str => {
//     strToArr = str.split('');
//     objToArr = Object.values(DIGITS);
//     let strToNum = []

//     for (let i = 0; i < strToArr.length; i++) {
//         for (let j = 0; j < objToArr.length; j++) {
//             if (strToArr[i] == objToArr[j]) {
//                 strToNum.push(objToArr[j])
//             }
//         }
//     }
//     return strToNum;
// }

// console.log(stringToInteger(str));


// // SECOND SOLUTION (but it felt too easy to be true)
// stringToInteger = str => {
//     return str * 1;
// }

// // console.log(stringToInteger(str));

// // FURTHER EXPLORATION
// // Write a hexadecimalToInteger() function that converts a string representing a hexadecimal number to its integer value. Note that hexadecimal numbers use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of 10-15.

// hexadecimalToInteger = (string) => {
//     const DIGITS = {
//         0 : 0,
//         1 : 1,
//         2 : 2,
//         3 : 3,
//         4 : 4,
//         5 : 5,
//         6 : 6,
//         7 : 7,
//         8 : 8,
//         9 : 9,
//         A : 10,
//         B : 11,
//         C : 12,
//         D : 13,
//         E : 14,
//         F : 15,
//         a : 10,
//         b : 11,
//         c : 12,
//         d : 13,
//         e : 14,
//         f : 15
//     };
//     let arrayOfDigits = string.split("").map(char => DIGITS[char]);
//     let value = 0;
//     let index = 3;
//     for (let i = 0; i < arrayOfDigits.length; i++) {
//         // console.log(index);
//         value += (arrayOfDigits[i] * 16 ** (index))
//         if (index === 0) {
//             break;
//         } 
//         index -= 1;
//     }
//     return value;
// }

// // console.log(hexadecimalToInteger('4D9f'))