// wordsReverser

function wordsReverser(str) {

// return error if str is not a string

if (typeof str !== "string") {

return "wordsReverser(str) requires a string input";

}

// split words (punctuation inclusive) and numbers while filtering out extra spaces

var wordsArray = str.match(/[a-z.,-\/#!$%\^&\*;:{}=\_`~()1-90]+/gi);

// create a mapped array of reversed words

var reverseArray = wordsArray.map(function(string) {

// split each word array into individual character arrays that include punctuation.

var word = string.split("");

// if character array includes punctuation characters at last index

if (/[.,?!]+/g.test(word.slice(string.length -1))) { // <<<------- punctuation marks in this regex will maintain their original index in the return string

// pop off punctuation mark and store it

var punctuation = word.pop(); //

// reverse remaining characters

var reversedWord = word.reverse();

// push punctuation onto the end of reversed characters array

reversedWord.push(punctuation);

// return joined word

return reversedWord.join("");

}

// if there is no punctuation at the end of the word, then simply return the reversed word

else {

return word.reverse().join("");

}

});

// return string of reverseArray joined by spaces

return reverseArray.join(" ");

}

console.log(wordsReverser("This is fun, hopefully."));

console.log(wordsReverser("Yes, it is, certainly!"));