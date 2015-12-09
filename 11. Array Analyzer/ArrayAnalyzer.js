// Array Analyzer
function arrayAnalyzer(args) {
 
  // return error if function has no arguments
  if (arguments.length < 1) { return "arrayAnalyzer(args) requires at least one number argument"; }
  
  // arguments to array
  var argsArray = Array.prototype.slice.call(arguments);
  
  // filter out non-numbers
  var filteredArray = argsArray.filter(function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  });
  
  // return error if filtered array is empty because there were no number arguments
  if (filteredArray.length < 1) return "arrayAnalyzer(args) reguires at least one number argument";
  
  
  // Helper Functions ////////////////////////////////////
  
  // odd number counter helper function
  function oddCounter() {
    
    var oddNums = 0; // counter
    
    // for each number in the filtered array
    for (var i = 0; i < filteredArray.length; i++) {
      
      //if number modulus 2 is not zero then increment oddNum counter
      if (filteredArray[i] % 2 !== 0) 
         oddNums++;       
    }  
    return oddNums;
  }
  
  // negative number counter helper function
  function negCounter() {
    
    var negNumbers = 0; //counter
    
    // for each number in filtered array
    for (var i = 0; i < filteredArray.length; i++) {
      
      // increment counter if less than 0
      if (filteredArray[i] < 0) 
        negNumbers++;
    }   
    return negNumbers;
  }
  
  // averager helper function
  function averager() {
    
    // reduce to sum of all numbers
    var reducedArray = filteredArray.reduce(function(a,b) {
      return a+b;
    }); 
    
    // return sum divided by filteredArray length, rounded to the second decimal place, as a number data type
    return Number((reducedArray / filteredArray.length).toFixed(2));
  }
  
  // median/mean helper function
  function medianFinder() {
    
    //sort from lowest to highest
    var sortedArray = filteredArray.sort(function(a, b) {
      return a-b;
    });
    
    // if the array length is even
    if (sortedArray.length % 2 === 0) {
      
      // return the number data type of the sum of the two middle indexes divided by 2 (the mean), rounded to the second decimal place
      return Number((((sortedArray[(sortedArray.length / 2) - 1]) + (sortedArray[(sortedArray.length / 2)])) / 2).toFixed(2));
    }
    
    // if the array length is odd
    else
      // return the middle index (median)
      return sortedArray[(sortedArray.length - 1) / 2];
  }
  
  // End Helper Functions /////////////////////////////////////
  
  
  // create return object and use helper functions to determine values
  var returnObject = {
    "odds": oddCounter(),
    "negatives": negCounter(),
    "avg": averager(),
    "median": medianFinder()
  };
  
  
  return returnObject;
}

console.log(arrayAnalyzer(7, -3, 0, 12, 44, -5, 3, "string"));