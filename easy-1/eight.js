// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

function leapYear(year)
{
    // If divisible by 400 then return true
    // If divisible by 100 then return false
    // If divisible by 4 then return true

    // if (year % 400 ==0) {
    //     console.log(year,true);
    //     return true;
    // } else if (year % 100 == 0) {
    //     console.log(year,false);
    //     return false;
    // } else if (year % 4 == 0){
    //     console.log(year,true);
    //     return true;
    // } else {
    //     console.log(year,false);
    //     return false;
    // }

    var resp = (year % 400 == 0) || (year % 100 != 0 && year % 4 == 0);
    console.log(year,resp);
    return resp;
}

leapYear(2016);      // true
leapYear(2015);      // false
leapYear(2100);      // false
leapYear(2400);      // true
leapYear(240000);    // true
leapYear(240001);    // false
leapYear(2000);      // true
leapYear(1900);      // false
leapYear(1752);      // true
leapYear(1700);      // false
leapYear(1);         // false
leapYear(100);       // false
leapYear(400);       // true