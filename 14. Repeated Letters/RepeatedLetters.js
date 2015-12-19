function wordSelector(str) {

    // security for non-string input
    if (Object.prototype.toString.call(str) !== '[object String]') {
        return "Error: wordSelector reguires a string input";
    }

    // split and remove non-words
    var wordArray = str.match(/[a-z]+/ig);

    // repeat counter to pass all words through
    function repeatCounter(word) {
        
        var testedChars = "";
        
        var threshold = 2;
        
        for (var i = 0; i < word.length; i++) {
            if (testedChars.indexOf(word.charAt(i)) === -1) {
                var reg = RegExp(word[i], "gi");
                var r = word.match(reg);
                if (r.length > threshold) {
                    threshold = r.length;
                }
                testedChars += word.charAt(i);
            }
        }
        
        return threshold;
    }

    // Array to hold words with highest repeats 
    var highestRepeats = [];

    // keep track of current threshold for number of repeats necessary to be held in highestRepeats
    var threshold = 1;

    // iterate through wordArray
    for (var i = 0; i < wordArray.length; i++) {

        // store number of repeats through repeatCounter function
        var repeats = repeatCounter(wordArray[i]);

        // if number of repeats beats the threshold
        if (repeats > threshold) {
            highestRepeats = []; // clear return array
            highestRepeats.push(wordArray[i]); // push current word
            threshold = repeats; // update threshold
        }

        // if repeats matches threshold
        else if (repeats === threshold) {
            highestRepeats.push(wordArray[i]); // push current word
        }
    }

    return highestRepeats;
}

console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));