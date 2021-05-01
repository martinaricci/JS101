// WHAT CENTURY IS THAT?

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// HOW DO YOU CALCULATE IT?
// Add 1 to the first 2 digits(on the left) of the year of birth, unless it is a year that ends in 00.

// Input: number
// Output: string

let century = (num) => {
  let numDividedBy100 = num / 100;
  let century = '';

  if (!Number.isInteger(numDividedBy100)) {
    century = Math.floor(numDividedBy100 + 1).toString();
  } else {
    century = (numDividedBy100).toString();
  }

  if (century.slice(-2) === '11' || century.slice(-2) === '12' || century.slice(-2) === '13') {
    century += 'th';
    return century;
  }

  switch (century[century.length - 1]) {
    case '1':
      century += 'st';
      break;
    case '2':
      century += 'nd';
      break;
    case '3':
      century += 'rd';
      break;
    default:
      century += 'th';
  }

  return century;
};

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"