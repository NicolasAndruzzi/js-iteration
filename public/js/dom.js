/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

/////////////////////////////////////////////////////////////////////////////////////

//Buttons:
var sumAll = document.getElementById("sum-all");
var countSelected = document.getElementById("count-selected");
var sumSelected = document.getElementById("sum-selected");
var averageAll = document.getElementById("average-all");
var averageSelected = document.getElementById("average-selected");

//Select list:
var selectorOptions = document.getElementById("selector");
var resultsField = document.getElementById("results");

/////////////////////////////////////////////////////////////////////////////////////

sumAll.addEventListener("click", function(){
  // console.log(selectorOptions.options);
  resultsField.innerHTML = "Sum of all numbers = $" + sum(selectorOptions.options).toFixed(2);
});

/////////////////////////////////////////////////////////////////////////////////////

averageAll.addEventListener("click", function(){
  // console.log(selectorOptions.options);
  resultsField.innerHTML = "Average of all numbers = $" + average(selectorOptions.options);
});

// /////////////////////////////////////////////////////////////////////////////////////
//
// sumAll.addEventListener("click", function(){
//   // console.log(selectorOptions.options);
//   resultsField.innerHTML = "Sum of all numbers = $" + sum(selectorOptions.options).toFixed(2);
// });
//
// /////////////////////////////////////////////////////////////////////////////////////
//
// sumAll.addEventListener("click", function(){
//   // console.log(selectorOptions.options);
//   resultsField.innerHTML = "Sum of all numbers = $" + sum(selectorOptions.options).toFixed(2);
// });
//
// /////////////////////////////////////////////////////////////////////////////////////
//
// sumAll.addEventListener("click", function(){
//   // console.log(selectorOptions.options);
//   resultsField.innerHTML = "Sum of all numbers = $" + sum(selectorOptions.options).toFixed(2);
// });
//
// /////////////////////////////////////////////////////////////////////////////////////
