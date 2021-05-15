// Polindromic Strings

let isPalindrome = (string) => {
    let increaser = 1;
    
    for (let idx = 0; idx < string.length; idx++) {
        if (string[idx] === string[string.length - increaser]) {
            increaser += 1;
        } else if (string[idx] === ' ') {
            return false;
        } else {
            return false;
        }

    }
    return true;
};


console.log(isPalindrome('madam')); // true
console.log(isPalindrome('Madam')); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome('356653')); // true