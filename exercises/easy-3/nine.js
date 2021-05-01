// CLEAN UP THE WORDS

let cleanUp = (str) => {
    let charactersOnly = str.split('').map(char => char.match(/\W/g) ? ' ' : char);

    let finalString = '';
    charactersOnly.forEach(character => {
        if (!(finalString[finalString.length - 1] === ' ' && character === ' ')) {
            finalString += character;
        }
    });
    return finalString;
};

console.log(cleanUp("---What's my +*& line?"))