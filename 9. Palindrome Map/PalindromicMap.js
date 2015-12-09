function palindromicMap(str) {
  
  // if str in not a string, return error message
  if (typeof str !== "string") {
    return "palindromeMap() requires a string as input";
  }
  
  // split and remove punctuation and extra spaces
  var array = str.match(/[a-z-]+/ig);
  
  // map whether each word in array is palindrome or not
  var returnArray = array.map(function(str) {
    return str === str.split("").reverse().join(""); // check for palindrome
  });
  
  return returnArray;
  
}


console.log(palindromicMap("stash and pop on this level"));