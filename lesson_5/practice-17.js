// Each UUID consists of 32 hexadecimal characters(the digits 0 - 9 and the letters a - f) represented as a string.The value is typically broken into 5 sections in an 8 - 4 - 4 - 4 - 12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

let characters = 'abcdef0123456789';
let index = 0;
let section = [8, 4, 4, 4, 12];
let result = '';

// Write a function that takes no parameters and returns a UUID.

let createUUID = () => {
    while (index < characters.length * 2) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        index ++;
    }

    result = result.split('');
    // result.forEach(char => {
    //     console.log(result.indexOf(char));
        // if (section.includes(result.indexOf(char))) {
        //     result.splice(result.indexOf(char), 0, '-');
        // };
        // section.forEach(num => {
        //     if (result.indexOf(char) === num) {
        //         result.splice(result.indexOf(char), 0, '-');
        //     }
        // })
    // });
    // console.log(result)
    // result.splice(section[0], 0, '-') + result.slice(section[0]);
    return result;
}

console.log(createUUID());