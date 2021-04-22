// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

arr.sort(function(a, b) {
  return b - a;
});


// How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => {
  console.log(Number(a.published) - Number(b.published));
});


// For each of these collection objects, demonstrate how you would access the letter g.

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

console.log(arr1[2][1][3]);
console.log(arr2[1]['third'][0]);
console.log(arr3[2]['third'][0][0]);
console.log(obj1['b'][1]);
console.log(Object.keys(obj2['third'])[0]);


// For each of these collection objects, demonstrate how you would change the value 3 to 4.

let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] = 4;
console.log(arr1);
arr2[2] = 4;
console.log(arr2);
obj1['first'][2][0] = 4;
console.log(obj1);
obj2['a']['a'][2] = 4;
console.log(obj2);


// Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Compute and display the total age of the male members of the family.

let totalMaleAge = 0;

for (let munster in munsters) {
    if (munsters[munster]['gender'] === 'male') {
        totalMaleAge += munsters[munster]['age'];
    }
}
console.log(totalMaleAge);


// print the name, age, and gender of each family member:

for (let munster in munsters) {
    console.log(`${munster} is a ${munsters[munster]['age']}-year-old ${munsters[munster]['gender']}`)
}


// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

console.log(Object.values(obj));
let objValues = Object.values(obj);

let vowels = [];

objValues.forEach(arr => {
    return arr.forEach(str => {
        return str.split('').forEach(letter => {
            if ('aeiou'.includes(letter)) {
                vowels.push(letter);
            }
        });
    });
});
console.log(vowels);
return vowels;
