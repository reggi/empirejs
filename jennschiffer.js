// var optimist = require("optimist").argv;
// whoops forgot input was array

var input = [7, 12, 1];

var output = function(input){
  return input.sort(function(a,b){
      return a - b;
  })
}

console.log(output(input));

/*

* sorting algorithm visualization
* difference between insertion and bubble sort
* insertion does the checking with the for loop
* bubble does the checking within the for loop (for loop within for loop)
* merge sort breaks up the arrays into smaller pieces

*/
