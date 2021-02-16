// Write a function that will take a short line of text, and write it to the console log within a box.


logInBox = (str, width) => {                                
    let emptySpaces = '';
    let dashes = '';
    if (str.length > width) {
        str = str.substring(0, width);
        console.log(str);
    }
    let lineOfString = '| ' + str + ' |';

    if (width !== undefined) {
        for (let i = 0; i < width; i++) {
            emptySpaces += ' ';
            dashes += '-';
        }
    } else {
        for (let i = 0; i < str.length; i++) {
            emptySpaces += ' ';
            dashes += '-';     
        }
    }

    console.log(str.length);

    console.log('+-' + dashes + '-+' + '\n' + '| ' + emptySpaces + ' |' + '\n' + lineOfString + '\n' + '| ' + emptySpaces + ' |' + '\n' + '+-' + dashes + '-+');
}

logInBox('To boldly go where no one has gone before.', 20);

