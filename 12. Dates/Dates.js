function age(year, month, day) {
    
    // since the date object can find the number of miliseconds between to date objects,
    // I will use the number of miliseconds in a day to calculate the number of days
    var dayMil = 1000 * 60 * 60 * 24;
    
    // create new Date object from input perameters
    var peramDate = new Date(year, month, day);
    console.log(peramDate);
    //create new Date object from current day;
    
    // get the difference in miliseconds between the two dates
    var timeDiff = Math.abs(new Date() - peramDate);
    console.log(timeDiff);
    
    // get the days, months, and years difference
    var days = Math.floor(timeDiff/dayMil);
    console.log(days);
    var months = Math.floor(days/30);
    var years = Math.floor(months/12);
    
    return years + " years, " + months + " months, and " + days + " days."; 
}

console.log(age(2015, 11, 13));