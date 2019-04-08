/*
Used memoisation with a recursive fibonacci sequence finding function
to stop the time complexity from getting out of hand
*/

var dictionary = [];

function getSequence(n) {
  // TODO: Implement your code to replace the line below
  var sequence = [];
  
  for(var i = 1; i < n + 1; i++) {    //im assuming that fib(0) is added somewhere else, so we have to do this instead. 
    sequence.push(fib(i));
  }
  return sequence;
}

function fib(n) {

  if(n < 2) {
    return n;
  }

  if(dictionary[n - 1] == undefined) {    //if it isnt already in the dictionary then calculate it and add it to the dictionary
    if(n < 2) {
      dictionary[n - 1] = n;    //0 returns 0, 1 returns 1 
    } else {
      dictionary[n - 1] = fib(n - 1) + fib(n - 2);
    }
  } else {
    // console.log("looked up");    //just to show it looking up
  }

  return dictionary[n - 1];
}

module.exports = {
  getSequence
};
