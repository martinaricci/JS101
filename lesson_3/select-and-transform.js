// Let's look at an example with objects. In this example, we want to select the key-value pairs where the value is 'Fruit'.

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let selectFruit = (obj) => {
    let selectedFruits = {};
    for (const [key, value] of Object.entries(produce)) {
        if (value === 'Fruit') {
            selectedFruits[key] = value;
        }
    }
    console.log(selectedFruits);
    return selectedFruits;
} 
selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }


// Can you implement a doubleNumbers function that mutates its argument?
let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(numbers) {
    let counter = 0;

    while (counter < numbers.length) {
        numbers[counter] = numbers[counter] * 2;
        counter++;
    }
    
    return numbers;
}

console.log(doubleNumbers(myNumbers));
console.log(myNumbers);


// Suppose we wanted to transform the numbers based on their position in the array rather than their value? Try coding a solution that doubles the numbers that have odd indices:
let myNumbersArray = [1, 4, 3, 7, 2, 6];

function doubleOddNumbers(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumberIndex = numbers.indexOf(numbers[counter]);

    if (currentNumberIndex % 2 === 1) {
      doubledNums.push(numbers[counter] * 2);
    } else {
      doubledNums.push(numbers[counter]);
    }
  }

  return doubledNums;
}

// console.log(myNumbersArray);
console.log(doubleOddNumbers(myNumbersArray));


// Update the doubleNumbers function so that it not only can double the numbers in an array but can also multiply them by any other number. 

let numbers = [1, 4, 3, 7, 2, 6];

function multiply(numbers, multiplier) {
    let counter = 0;
    
    while (counter < numbers.length) {
        numbers[counter] = numbers[counter] * multiplier;
        counter++;
    }
    
    return numbers;
}

console.log(multiply(numbers, 3)); // => [3, 12, 9, 21, 6, 18]