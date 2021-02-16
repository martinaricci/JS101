// Write a function that will take a short line of text, and write it to the console log within a box.


// FURTHER EXPLORATION
// Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted.

// For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box. This isn't an easy problem, but it's doable with basic JavaScript.

logInBox = (str, width) => {                                
    let emptySpaces = '';
    let dashes = '';
    // if (str.length > width) {
    //     // str = str.substring(0, width);
    //     // for (let i = 0; i < str.length; i++) {
    //         if (str.length % width == 0) {
    //             str = str + '\n';
    //         }
    //     // }
    //     console.log(str);
    // }
    let lineOfString = '| ' + str + ' |';
    
    if (width !== undefined) {
        let spliter = str.split('');
        console.log(spliter);
        let result = [];
        if (spliter.length > width) {
            for (let i = 0; i < spliter.length; i++) {
                console.log(spliter.indexOf(spliter[i]))
            }
        }
        console.log(str);
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


