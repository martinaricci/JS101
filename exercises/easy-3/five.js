// Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.


// INPUT = 5
// 1. Log 5 rows of *

let rowsCounter = 0;
let rows;
triangle = num => {
    while (rowsCounter < num) {
        for (let i = 0; i < num; i++) {
            rows = '*'.repeat(rowsCounter + 1);
        }
        rowsCounter++;
        console.log(rows);
    }
}


triangle(5);

//     *
//    **
//   ***
//  ****
// *****