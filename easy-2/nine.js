// Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

let str = "4781";

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

checkString = str => {
    strToArr = str.split('');
    // console.log(strToArr);
    objToArr = Object.values(DIGITS);
    // console.log(objToArr);
    let strToNum = []

    for (let i = 0; i < strToArr.length; i++) {
        for (let j = 0; j < objToArr.length; j++) {
            if (strToArr[i] == objToArr[j]) {
                strToNum.push(objToArr[j])
            }
        }
    }
    return strToNum;
}

console.log(checkString(str));