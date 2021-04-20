// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

// if arg1 || arg2 is true return true;
// if arg1 || arg2 is false return false;


xor = (arg1, arg2) => {
    if (arg1 || arg2 === true) {
        return true;
    } else if (arg1 || arg2 === false) {
        return false;
    } else if (arg1 && arg2 === true) {
        return true;
    } else if (arg1 && arg2 === false) {
        return false;
    }
}

console.log(xor(undefined, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
