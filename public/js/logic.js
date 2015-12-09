/*

Hints for the first problem:

1. Define a function that:
- is assigned to a variable named `sum`
- has one parameter named `options`
- returns the calculated sum of all of the values of all of the options passed in

NOTE: you can use a `for` loop to make this happen.

*/

var sum = function(options){
  total = 0;
  for (var i = 0; i < options.length; i++) {
    total += parseInt(options[i].value);
    // console.log(options[i]);
  };
  console.log(total);
  return total;
};

var average = function(options){
  var average = sum(options) / options.length;
  return average.toFixed(2);
};

var getCount = function(options){
  var count = 0;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected) {
      count++;
    }
  }
  return count;
};

var getSelectedSum = function(options){
  var total = 0;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected) {
      total += parseInt(options[i].value);
    };
  };
  return total.toFixed(2);
};

var averageOfSelected = function(options){
  var average = getSelectedSum(options) / getCount(options);
  if (getCount(options) === 0) {
    return 0;
  }
  else {
    return average.toFixed(2);
  }
};

// var total = options.reduce(function(c,e){
//   return c + e.value
// })
