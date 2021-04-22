// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

function leapYear(year) {
    // before Gregorian Calendar
    if (year < 1752) {
        console.log(year, year % 4 == 0);
        
    // after Gregorian Calendar
    } else {
        let res = (year % 400 == 0) || (year % 100 != 0 && year % 4 == 0);
        console.log(year, res);
    }
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
leapYear(1700);      // true
leapYear(1);         // false
leapYear(100);       // true
leapYear(400);       // true