function age(year, month, day) {
    
    var d = new Date();
    
    var today = new Date(2016, 0, 1); //new Date(d.getFullYear(), d.getMonth(), d.getDate());
    
    var targetDate = new Date(year, month, day);
    
    /* var diffInMil = Math.abs(today.getTime() - targetDate.getTime());
    
    var daysDiff = diffInMil / (1000*60*60*24);
    
    var years, months, days;
    
    var remaining = daysDiff % 365;
    
    daysDiff -= remaining;
    
    years = daysDiff / 365;
    
    days = remaining % 30;
    
    remaining -= days;
    
    months = remaining / 30; */
    
    var days = Math.abs(today.getDate() - targetDate.getDate());
    
    var months = Math.abs(today.getMonth() - targetDate.getMonth());
    
    var years = Math.abs(today.getFullYear() - targetDate.getFullYear());
    
    return years + " " + months + " " + days;
}

console.log(age(2017, 11, 17));
console.log(age(2015, 3, 6));
console.log(age(2015, 11, 29));


