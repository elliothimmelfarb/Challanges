function age(year, month, day) {
    
    // since the date object can find the number of miliseconds between to date objects,
    // I will use the number of miliseconds in a day to calculate the number of days
    var day = 1000 * 60 * 60 * 24;
    
    // create new Date object from input perameters
    var peramDate = new Date(year, month, day);
    console.log(peramDate);
    //create new Date object from current day;
    var today = new Date();
    console.log(today);
    
}

console.log(age(2017, 11, 17));