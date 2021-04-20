// Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

integerToString = (num) => {
    // let arrOfNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let strOfNum = '';
    do {
        remainder = num % 10;
        console.log(num);
        Math.floor(num / 10);
        let strConcat = num + strConcat;
        console.log(strConcat);
    } while (num >= 0);

    // while (num >= 0) {
    //     num = num % 10;
    //     console.log(num)
    //     let strConcat = strOfNum.concat(num);
    //     console.log(strConcat);
    //     // let lastDigit = Math.floor(num / 10);
    //     // console.log(lastDigit);
    //     // console.log(num);
    // }
};

integerToString(4321);
