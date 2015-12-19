function wordSelector(str) {

    // security for non-string input
    if (Object.prototype.toString.call(str) !== '[object String]') {
        return "Error: wordSelector reguires a string input";
    }

    // split and remove non-words
    var wordArray = str.match(/[a-z]+/ig);

    // fucntion counts number of most repeated letter in a word
    function repeatCounter(word) {
        
        // to avoid retesting chars
        var testedChars = "";
        
        // highest number of repeats
        var thresholdInner = 2;
        
        // for each char in word
        for (var i = 0; i < word.length; i++) {
            
            // if it hasn't been tested before
            if (testedChars.indexOf(word.charAt(i)) === -1) {
                var reg = RegExp(word[i], "gi"); // create regex expression out of char
                var r = word.match(reg); // collect all instances of that char
                
                // if its length is greater than the threshold
                if (r.length > thresholdInner) {
                    thresholdInner = r.length; // move threshold up
                }
                
                // flag current char to not test again
                testedChars += word.charAt(i);
            }
        }
        
        // return the highest number of repeats of a single char
        return thresholdInner;
    }

    // Array to hold words with the highest number of repeated letters 
    var highestRepeats = [];

    // threshold of repeates to be held in highestRepeats
    var thresholdOuter = 1;

    // for each word in wordArray
    for (var i = 0; i < wordArray.length; i++) {

        // store number of repeats through repeatCounter function
        var repeats = repeatCounter(wordArray[i]);

        // if number of repeats beats the threshold
        if (repeats > thresholdOuter) {
            highestRepeats = []; // clear return array
            highestRepeats.push(wordArray[i]); // push current word
            thresholdOuter = repeats; // update threshold
        }

        // if number of repeats matches current threshold
        else if (repeats === thresholdOuter) {
            highestRepeats.push(wordArray[i]); // push current word
        }
    }

    // return array of word(s) with the highest number of repeated letters
    return highestRepeats;
}

console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));