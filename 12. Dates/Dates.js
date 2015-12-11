function age(year, month, day) {
    
    // since the date object can find the number of miliseconds between to date objects,
    var dayMil = 1000 * 60 * 60 * 24;
    
    // create new Date object for today to get year, month, and date from in order get the "apples to apples" date difference 
    var today = new Date();
    
    // get the difference in miliseconds between the two dates
    var totalDays = Math.abs((new Date(2015, 3, 2) - new Date(year, month, day)) / dayMil);
    console.log(totalDays);
    
    var years = Math.floor(totalDays/365);
    var months = Math.floor(totalDays/30 - years * 12);
    var days = Math.floor(totalDays - (years * 365 + months * 30)); // doesnt work properly

    
    // recalibrate days to account for actual calendar days
    
    
    return years + " years, " + months + " months, and " + days + " days."; 
}

console.log(age(2017, 11, 17));
console.log(age(2015, 3, 6));

// today.getFullYear(), today.getMonth(), today.getDate()