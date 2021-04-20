// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

twice = num => {
    // console.log(num * 2);
    let spliter = num.toString();
    let half = spliter / 2;
    console.log(spliter);
    console.log(half);

    // if ()
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676