// GRADE BOOK

// input: number, number, number
// output: string

// find out how to find the mean of two or more scores --> "It is the sum divided by the count."
// declare a variable and assign it to an object that has the score letters as keys and an array of numbers as values.

// test if the ending score is a number >, <, === to one of the numbers in the arrays.

const SCORES = {
    A : [90, 100],
    B : [80, 90],
    C : [70, 80],
    D : [60, 70],
    F : [0, 60]
}

let getGrade = (score1, score2, score3) => {
    let total;
    total = Math.round((score1 + score2 + score3) / 3);

    return Object.keys(SCORES).find(key => SCORES[key][0] <= total && (SCORES[key][1] > total || SCORES[key][1] === total))
}

console.log(getGrade(95, 90, 93));