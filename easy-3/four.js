// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

fibonacci = num => {
    if (num <= 1) return 1;
    
    return fibonacci(num - 1) + fibonacci(num - 2);
}

findFibonacciIndexByLength = length => {
    let num = 0;
    let index = 1;
    let res;
    for (let i = 0; num >= 0; i++) {
        let fibonacciNum = fibonacci(num);
        fibonacciNumToStr = fibonacciNum.toString();
        if (fibonacciNum.toString().length === length) {
            res = fibonacciNum;
            break;
        }
        num++;
        index++;
    }
    return index;

}

console.log(findFibonacciIndexByLength(2));       // 7

// retest the below
// console.log(findFibonacciIndexByLength(10));      // 45
// console.log(findFibonacciIndexByLength(16));      // 74