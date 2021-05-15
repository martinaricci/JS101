// How old is Teddy?
// With "Further exploration"

let teddysAge = (max, min) => {
  let age = Math.round((Math.random() * (max - min + 1)) + min);

  if (age > max) {
    age -= 1;
  } else if (age < min) {
    age += 1;
  }

  if (min > max) {
    min = max;
    max = min;
  }

  return `Teddy is ${age} years old!`;
};

console.log(teddysAge(120, 20));