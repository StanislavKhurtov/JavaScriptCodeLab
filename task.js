'use strict';

//!-Calculate BMI==============================

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

//! solution

/*

function bmi(weight, height) {
  var result = weight/Math.pow(height,2)

  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }

}
*/

//!-Convert boolean values to strings 'Yes' or 'No'.

/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 */

/*
function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}
*/

//!- MakeUpperCase

/*
Write a function which converts the input string to uppercase.
 */

//! Solution

/*
function makeUpperCase(str) {
  return str.toUpperCase();
}
 */


//! - Sentence Smash

/*
Sentence Smash
Write a function that takes an array of words and smashes them together into
a sentence and returns the sentence. You can ignore any need to sanitize
words or add punctuation, but you should add spaces between each word. Be careful,
there shouldn't be a space at the beginning or the end of the sentence!
 */

//! Solution

/*
function smash (words) {
  return words.join(" ");
};
 */

//!- Sum without highest and lowest number

/*
Task
Sum all the numbers of a given array ( cq. list ),
except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge,
even if there are more than one with the same value.

Mind the input validation.
 */

//! Solution

/*



function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}
 */


//!-Find Maximum and Minimum Values of a List

/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
 */


/*
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
 */

//!- You only need one - Beginner

/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
 */

/*
let check = (a, x) => {return a.includes(x)};
 */





