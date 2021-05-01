// CLEAN UP THE WORDS

let cleanUp = (str) => {
    let charactersOnly = str.split('').map(char => char.match(/\W/g) ? ' ' : char);

    let cleanText = '';
    charactersOnly.forEach(character => {
        if (!(cleanText[cleanText.length - 1] === ' ' && character === ' ')) {
            cleanText += character;
        }
    });
    return cleanText;
};

console.log(cleanUp("---What's my +*& line?"))