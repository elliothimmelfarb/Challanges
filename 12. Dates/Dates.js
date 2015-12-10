function age(year, month, day) {
    
    var d = new Date();
    
    var years = Math.abs(d.getFullYear() - year);
    
    var months = Math.abs(d.getMonth() - month);
    
    var days = Math.abs(d.getDate() - day);
    
    var totalDays = (years * 365) + (months * 30) + days;
    
    return "date";
}

console.log(age(2017, 11, 17));