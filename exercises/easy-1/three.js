// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

evenNumbers = () => {
    for (let i = 1; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

evenNumbers();