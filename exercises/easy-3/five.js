// Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.


// input: number
// output: strings
// declare a var and assign it to an empty string
// declare a var 'repeater' and assign it to 1
// while number > 0, str = (empty spaces * number - 1) + ('*' * repeater)
// console.log(str); 
// decrease num by 1
// increase repeater by 1

let triangle = (num) => {
    let str = '';
    let repeater = 1;
    while (num > 0) {
        str = ' '.repeat(num - 1) + '*'.repeat(repeater);
        console.log(str);
        num--;
        repeater++
    }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****