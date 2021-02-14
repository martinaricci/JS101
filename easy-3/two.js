// Write a function that will take a short line of text, and write it to the console log within a box.


logInBox = str => {
    let emptySpaces = '';
    let dashes = '';
    let lineOfString = '| ' + str + ' |';
    for (let i = 0; i < str.length; i++) {
        emptySpaces += ' ';
        dashes += '-'; 
    }
    console.log(str.length);
    console.log(emptySpaces.length);


    console.log('+-' + dashes + '-+' + '\n' + '| ' + emptySpaces + ' |' + '\n' + lineOfString + '\n' + '| ' + emptySpaces + ' |' + '\n' + '+-' + dashes + '-+');
}

logInBox('To boldly go where no one has gone before.');