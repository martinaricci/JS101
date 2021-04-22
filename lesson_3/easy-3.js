// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];
// 1.
numbers.length = 0;

// 2.
numbers.splice(0, numbers.length);

// 3.
while (numbers.length > 0) {
    numbers.pop();
}
console.log(numbers);

// --------------------------
// The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }


function isColorValid(color) {
  return (color === "blue" || color === "green") ? true : false;
}

function isColorValid(color) {
  return (color === "blue" || color === "green");
}

console.log(isColorValid('green'));
