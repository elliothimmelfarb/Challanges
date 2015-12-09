// Swaps the case of each char in a string and returns modified string

function swapCase(str) {

// split each char into individual elements of an array

var array = str.split("");

// check each char element and swap case

for (var i = 0; i < array.length; i++) {

if (array[i] === array[i].toUpperCase()) { // if char is uppercase

array[i] = array[i].toLowerCase(); // change to lowercase

}

else if (array[i] === array[i].toLowerCase()) { // if char is lowercase

array[i] = array[i].toUpperCase(); // change to uppdercase

}

}

// join array into single string and return

return array.join("");

}

console.log(swapCase("Life is 10% what happens to you, and 90% of how you REACT to it"));