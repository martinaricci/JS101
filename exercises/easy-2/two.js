// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');

if (userName[userName.length - 1] === '!') {
    console.log('HELLO ' + userName.toUpperCase().substring(0, userName.length - 1) + '. WHY ARE WE SCREAMING?');
} else {
    console.log('Hello ' + userName);
}