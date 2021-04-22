// Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

shortLongShort = (str1, str2) => {
    str1Length = str1.length;
    str2Length = str2.length;

    str1.length < str2.length ? console.log(str1 + str2 + str1) : console.log(str2 + str1 + str2);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');  