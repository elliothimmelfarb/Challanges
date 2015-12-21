function age(year, month, day) {
    
    var d = new Date();
    
    var today = new Date(2015, 3, 2); //new Date(d.getFullYear(), d.getMonth(), d.getDate());
    
    var targetDate = new Date(year, month, day);
    
    var diffInMil = Math.abs(today.getTime() - targetDate.getTime());
    
    var daysDiff = diffInMil / (1000*60*60*24);
    
    var years, months, days;
    
    var remaining = daysDiff % 365;
    
    daysDiff -= remaining;
    
    years = daysDiff / 365;
    
    days = remaining % 30;
    
    remaining -= days;
    
    months = remaining / 30;
    
    return years + " " + months + " " + days;
}

console.log(age(2017, 11, 17));
console.log(age(2015, 3, 6));


