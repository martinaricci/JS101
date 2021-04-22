// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

oddNumbers = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

console.log(oddNumbers());