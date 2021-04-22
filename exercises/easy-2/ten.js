// Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If no sign is given, you should return a positive number.

// You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

function stringToInteger(string) {
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
    let arrOfStrings = string.split("");
    let newArr = [];
    for (var i = 0; i < arrOfStrings.length; i++) {
      if (arrOfStrings[i] === '-') {
          negNum = arrOfStrings[i] + arrOfStrings[i + 1];
          arrOfStrings.splice(0, 2);
          newArr.push(negNum);
          console.log(newArr);
        }
        newArr.push(arrOfStrings[i]);
    }
    console.log(newArr);

    let arrayOfDigits = arrOfStrings.map(char => {
        if (char === '-' + Object.keys(DIGITS).find(key => DIGITS[key] === char)) {
            console.log(char);
        } else {
            return DIGITS[char];
        }
    });
    console.log(arrayOfDigits);
}

console.log(stringToInteger("-4321"));
