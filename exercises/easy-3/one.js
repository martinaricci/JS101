// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.


let crunch = str => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      newStr += str[i];
    }
  }
  return newStr;
};


console.log(crunch('dddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""