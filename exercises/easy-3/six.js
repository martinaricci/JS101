// Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

var readlineSync = require('readline-sync');
 
// Wait for user's response.
var noun = readlineSync.question('Enter a noun: ');
var verb = readlineSync.question('Enter a verb: ');
var adjective = readlineSync.question('Enter an adjective: ');
var adverb = readlineSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);