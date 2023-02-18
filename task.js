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


//!- Shortest Word

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

/*
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
 */


//!- Invert values

/*
Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.
 */

/*
const invert = array => array.map(num => -num);
 */

//!- Isograms

/*
DESCRIPTION:
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
 */

/*
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}
 */

//!- Digits explosion

/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
 */

/*

const explode = s => s.replace(/\d/g, d => d.repeat(d));
 */


//!- Handshake problem

/*
Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once.
He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting
all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed
to perform these handshakes (a pair of farmers handshake only once).
 */


/*
function getParticipants(handshakes){
  let farmers = 0
  while(handshakes > farmers * (farmers - 1) / 2){
    farmers++
  }
  return farmers
}
 */


//!- Duplicate Encoder

/*
The goal of this exercise is to convert a string to a new string where each character in the new string
is "(" if that character appears only once in the original string, or ")" if that character appears more than once in
the original string. Ignore capitalization when determining if a character is a duplicate.

 */

/*
function duplicateEncode(word){

  let charCount = {};

  let encodedStr = "";

  for (let i = 0; i < word.length; i++) {

    let char = word[i].toLowerCase();

    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let i = 0; i < word.length; i++) {

    let char = word[i].toLowerCase();

    encodedStr += charCount[char] > 1 ? ")" : "(";
  }

  return encodedStr;
}
 */


//! - N-th Fibonacci

/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ),
returns the nth number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of
the previous two.
 */

/*
function nthFibo(n) {

  let arr = [0, 1];
  let result;

  for (let i = 0; i < n; i++) {

    if (i > 1) {

      let num1 = arr[i - 2];
      let num2 = arr[i - 1];
      arr.push(num1 + num2);
    }

    if (i + 1 === n) {
      result = arr[i];
    };
  };

  return result;
};
 */


//! - Sum Mixed Array

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
 */

/*
function sumMix(x){
  return x.map(element => Number(element)).reduce((sum, num) => sum += num);
}
 */





