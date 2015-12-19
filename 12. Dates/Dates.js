function age(year, month, day) {
    
    var d = new Date();
    
    var today = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    
    var targetDate = new Date (year, month, day);
    
    var diffInMil = Math.abs(today - targetDate);
    
    var diffInDays = diffInMil / (1000*60*60*24);
    
   // TODO print and parse statements
    
    
}

console.log(age(2015, 11, 20));

// today.getFullYear(), today.getMonth(), today.getDate()