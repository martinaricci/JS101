// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

penultimate = str => {
    let toArr = str.split(' ');
    return toArr[toArr.length - 2];
} 

console.log(penultimate("last word"));
console.log(penultimate("Launch School is great!"))

// Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases need to be considered? How would you handle those edge cases without ignoring them? Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.

middleWord = str => {
    let toArr = str.split(' ');
    if (toArr.length > 1) {
        return toArr[Math.round((toArr.length - 1) / 2)];
    } else if (toArr.length <= 1) {
        return 'Sorry, there are no enough words in this sentence.';
    }
} 

console.log(middleWord("Hello my name is Martina"));
