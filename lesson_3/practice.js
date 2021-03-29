let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array.

let createObj = (arr) => {
    let obj = {};

    arr.forEach(element => {
        obj[element] = arr.indexOf(element);
    });

    console.log(obj);
}

createObj(flintstones);


// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let objValues = Object.values(ages);
console.log(objValues.reduce((a, b) => a + b, 0));

// Pick out the minimum age from our current Munster family object:
console.log(Math.min(...objValues));