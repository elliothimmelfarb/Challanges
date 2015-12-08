/* returns an object which displays data on a string:
*     - number of words
*     - number of characters
*     - number of spaces 
*     - average word length 
*/

function superCounter(str) {
    
  // helper function which returns the number of words
  function wordCounter(s) {
    
    /* string.prototype.match is so cool. 
    * Before I found it I was using: s.replace(/[.,'-\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ").filter(function(val) {return val !== "";});
    * to filter out punctuation, split, and then remove empty strings in the array */
    var array = s.match(/[a-z]+/gi); 
    return array.length;
  }
  
  // helper function which returns the number of spaces
  function spaceCounter(s) {
    var array = s.split("");
    var counter = 0; // counts number of spaces found in the string
    
    // if it finds space then increment counter
    for (var i = 0; i < array.length; i++) {
      if (array[i] === " ") counter++;
    }
  
    return counter;
  }
  
  // helper function which returns average word length
  function avgWordLength(s) {
    
    // filter punctuation and split with no empty strings via the match method
    var array = s.match(/[a-z]+/gi);
    var lengthsArray = [];
    
    // push the lengths of each word into lengthsArray
    for (var i = 0; i < array.length; i++) {
      lengthsArray.push(array[i].length);
    }
 
    // return total total of all combined word lengths divided by the number of words. i.e. the average word length
    return lengthsArray.reduce(function(a,b) {return a+b;}) / lengthsArray.length; // 
  }
  
  // return object, filling perameters by passing original string through helper functions
  return {
    avgWordLength: avgWordLength(str),
    spaces: spaceCounter(str),
    chars: str.length,
    words: wordCounter(str),
    
  }; 
}

console.log(superCounter("Count   me in..."));