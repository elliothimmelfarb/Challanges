function wordSelector(str) {
    
    // security for non-string input
    if (Object.prototype.toString.call(str) !== '[object String]') {
        return "Error: wordSelector reguires a string input";
    }
    
    // split and remove non-words
    var wordArray = str.match(/[a-z]+/ig);
    
    // repeat counter to pass all words through
    function repeatCounter(word) {
        
        // store repeated letters in a string to easily search with .indexOf
        var repeatedLetters = "";
        
        // store number of repeats
        var repeatsNum = 0; 
    }
    
    var highestRepeats = [];
    
    
}

console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));