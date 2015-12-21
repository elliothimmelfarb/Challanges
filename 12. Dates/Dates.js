function age(year, month, day) {
    
    var d = new Date();
    
    var today = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    
    var targetDate = new Date (year, month, day);
    
    var diffInMil = Math.abs(today - targetDate);
    
    var daysDiff = diffInMil / (1000*60*60*24);
    
    var years, months, days;
    
    daysDiff = 789;
    
    years = Math.floor(daysDiff/365);
    
    months = Math.floor((daysDiff - (years * 365)) / 30);
    
    days = Math.floor((daysDiff - (years * 365 + months * 30)));
    
    console.log(years, " ", months, " ", days);
}

console.log(age(2015, 11, 20));

// today.getFullYear(), today.getMonth(), today.getDate()