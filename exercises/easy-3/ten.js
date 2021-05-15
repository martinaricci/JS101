// WHAT CENTURY IS THAT?

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// HOW DO YOU CALCULATE IT?
// Add 1 to the first 2 digits(on the left) of the year of birth, unless it is a year that ends in 00.

// Input: number
// Output: string

let century = '';

let catchWithTh = (lastTwo) => {
  return (lastTwo === '11' || lastTwo === '12' || lastTwo === '13');
};

let centurySuffix = (lastDigit) => {
  switch (lastDigit) {
    case '1':
      century += 'st';
      break;
    case '2':
      century += 'nd';
      break;
    case '3':
      century += 'rd';
      break;
    case 'h':
      century = century;
      break;
    default:
      century += 'th';
  }
};

let calculateCentury = (num) => {
  let numDividedBy100 = num / 100;

  if (!Number.isInteger(numDividedBy100)) {
    century = Math.floor(numDividedBy100 + 1).toString();
  } else {
    century = (numDividedBy100).toString();
  }
  
  if (catchWithTh(century.slice(-2))) {
    century += 'th';
  }

  centurySuffix(century[century.length - 1]);
  
  return century;
};

console.log(calculateCentury(2000)); // "20th"
console.log(calculateCentury(2001)); // "21st"
console.log(calculateCentury(1965)); // "20th"
console.log(calculateCentury(256)); // "3rd"
console.log(calculateCentury(5)); // "1st"
console.log(calculateCentury(10103)); // "102nd"
console.log(calculateCentury(1052)); // "11th"
console.log(calculateCentury(1127)); // "12th"
console.log(calculateCentury(11201)); // "113th"