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

//! - Beginner - Reduce but Grow

/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

 */

/*
function grow(x){
return x.reduce((acc,num) => {
  return acc * num;
})
}
 */

//! - Count by X

/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
 */

/*
function countBy(x, n) {
  let z = [];

   for (let i = 1; i <= n; i++) {

    z.push(i * x);
  }


  return z;
}

 */

//!- If you can't sleep, just count sheep!!

/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
Input will always be valid, i.e. no negative integers.
 */

/*
var countSheep = function (num){

  let str = "";

  for (let i = 1; i <= num; i++) {

    str += i + " sheep...";
  }

  return str;
}
 */

//! - Head, Tail, Init and Last

/*
Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
 */

/*
function head(arr){
return +(arr.slice(0,1))
}
function tail(arr){
return (arr.slice(1))
}
function init(arr){
return (arr.slice(0,arr.length-1))
}
function last(arr){
return +(arr.slice(arr.length-1))
}
 */

//!- Array Deep Count

/*
You are given an array. Complete the function that returns the number of ALL elements within an array,
including any nested arrays.
 */

/*
function deepCount(a){
  return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
}
 */


//!- Length of missing array
/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.
 */

/*
function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)

  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }

  return 0
}
 */

//!-



/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative
numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

/*
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];

    var positive = 0;
    var negative = 0;

    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }

    return [positive, negative];
}
 */

//!- Volume of a Cuboid

/*
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid.
Write a function to help Bob with this calculation.
 */

/*
const Kata = {
  getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}
 */

//!- DNA to RNA Conversion

/*

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells.
RNA differs slightly from DNA its chemical structure and contains no Thymine.
In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid,
i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
 */

/*
function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}
 */

//!-Removing Elements

/*
Take an array and remove every second element from the array. Always keep the first element and start removing
with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
 */

/*
const removeEveryOther = a => a.filter((_, i) => i % 2 === 0);
 */

//!-Is he gonna survive?

/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with
a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets
he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another
specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
 */

/*
const hero = (bullets, dragons) => bullets / 2 >= dragons;
 */

//!- Rock Paper Scissors!

/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 */

/*
const rps = (p1, p2) => {

  let winObj = {

    'scissors': 'paper',
    'paper': 'rock',
    'rock': 'scissors',
  }

  return winObj[p1] === p2 ? "Player 1 won!" :
         winObj[p2] === p1 ? "Player 2 won!" :
         "Draw!";
};

 */

//! The Feast of Many Beasts

/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start
and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the
chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether
the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may
contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain
numerals.
 */

/*
const feast = (beast, dish) => beast[0] + beast.slice(-1) === dish[0] + dish.slice(-1);
 */


/*
const feast = (beast, dish) => beast[0] + beast.slice(-1) === dish[0] + dish.slice(-1);
 */


//! altERnaTIng cAsE <=> ALTerNAtiNG CaSe

/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/
ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter
becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
 */

/*
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

 */

//! Cat years, Dog years

/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
 */

/*
var humanYearsCatYearsDogYears = function(y) {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}
 */

//! Double Char

/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
 */

/*
const doubleChar = (str) => str.split("").map(c => c + c).join("");
 */


//! Expressions Matter

/*
Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and
brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum
Obtained (Read the notes for more detail about it)
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
 */


/*
function expressionMatter(a, b, c) {
  return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}
*/


//! Grasshopper - Personalized Message

/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

 */

/*
const greet = (name, owner) => name === owner ? "Hello boss" : "Hello guest";
 */


//! Is it even?
/*
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
 */

/*
const testEven = n => n % 2 === 0;
 */


//! Return Negative
/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 */

/*
function makeNegative(num) {
  return -Math.abs(num);
}
 */


//! Area or Perimeter

/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal,
otherwise it is a rectangle.
 */

/*
const areaOrPerimeter = (l , w) => l === w ? l * w : (l + w) * 2;
 */


//! Total amount of points
/*
Our football team has finished the championship.

    Our team's match results are recorded in a collection of strings. Each match is represented by a string in the ' +
'format "x:y", where x is our team's score and y is our opponents score.

    For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

    if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the
championship by the rules given above.

    Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
 */

/*
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}
 */

//! Are You Playing Banjo?

/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo"
name + " does not play banjo"
Names given are always valid strings.
 */


/*
const areYouPlayingBanjo = (n) => n[0].toLowerCase() === "r" ? n + " plays banjo" : n + " does not play banjo";
 */


//! Keep up the hoop

/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging
message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
 */

/*
const hoopCount = n => n > 9 ? "Great, now move on to tricks" : "Keep at it until you get it";
 */

//! Sum The Strings

/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
 */

/*
function sumStr(a,b) {
  return String(Number(a)+Number(b));
}
 */


//! Grasshopper - Summation

/*
Summation
Write a program that finds the summation of every number from 1 to
num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
 */

/*
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}
 */

//! Grasshopper - Messi goals function

/*
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
 */


/*
function goals () {
  return [...arguments].reduce((a,b)=>a+b,0);
}
 */


//! Beginner Series #4 Cockroach

/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it
 in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
 */


/*
const cockroachSpeed = s => Math.floor(s / 0.036);
 */

//! Sort and Star

/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of
the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
 */

/*
const twoSort = a => a.sort()[0].split("").join("***");
 */

//! Abbreviate a Two Word Name

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */

/*
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
 */

//! Reversed sequence
/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
 */

/*
const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};
 */

//!Find the first non-consecutive number

/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the
first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique
and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a
single number and is not tested for, but you can write your own example test. )

2
Swift, Ruby and Crystal: nil
Haskell: Nothing
Python, Rust, Scala: None
Julia: nothing
Nim: none(int) (See options)
 */

/*
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}
 */

//!Difference of Volumes of Cuboids

/*
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will
consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference
of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20.
Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.
 */

/*

function find_difference(a, b) {
return Math.abs(a.reduce((previous, current) => previous * current) - b
.reduce((previous, current) => previous * current));
}
 */

//! A Needle in the Haystack

/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
Note: In COBOL, it should return "found the needle at position 6"
 */

/*
function findNeedle(haystack) {

  return "found the needle at position " + haystack.indexOf('needle');
}
 */

//! Convert a string to an array

/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
 */


/*
function stringToArray(string){
  return string.split(" ");
}
 */

//! Reversed Strings

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
 */

/*
function solution(str){
  return str.split('').reverse().join('');
}
 */


//! Convert number to reversed array of digits

/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
 */

/*
function digitize(n) {

  let arr = String(n).split("").reverse();

  arr.forEach(function(numStr, idx) {
    arr[idx] = Number(numStr);
  });

  return arr;
}
 */

//!Twice as old

/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
 */


/*
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
 */


//! Returning Strings

/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello,
<name> how are you doing today?".
 */

/*
const greet = name => `Hello, ${name} how are you doing today?`
 */


//! I love you, a little , a lot, passionately ... not at all

/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each
of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given
number of petals. The number of petals is always greater than 0.
 */

/*
const howMuchILoveYou = (nbPetals) => {

    switch (nbPetals % 6) {

      case 0:
        return "not at all";
      case 1:
        return "I love you";
      case 2:
        return "a little";
      case 3:
        return "a lot";
      case 4:
        return "passionately";
      case 5:
        return "madly";
      default:
        return null;
        }
      }
 */

//! Basic Mathematical Operations

/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
 */

/*
function basicOp(operation, value1, value2) {

  switch (operation) {

    case '+':
      return value1 + value2;

    case '-':
      return value1 - value2;

    case '*':
      return value1 * value2;

    case '/':
      return value1 / value2;
  }
}

 */

//! Keep Hydrated!

/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the
smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres =
 */

/*
function litres(time) {
  return Math.floor(time * 0.5);
}
 */

//! Convert a Boolean to a String

/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
 */

/*
function booleanToString(b){
  return b.toString();
}
 */

//! How good are you really?

/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add
your point to the given array!
 */

/*
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}
 */


//! Is the string uppercase?

/*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
 */

/*
String.prototype.isUpperCase = function() {
  let str = String(this);

  return str === str.toUpperCase();
}
 */


//! Sum of positive

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */

/*
function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
}
 */

//! Filter out the geese

/*
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements
but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit
with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements
may be repeated.
 */

/*
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};
 */

//! Counting sheep...

/*
Consider an array/list of sheep where some sheep may be missing
from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
 */

/*
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
 */

//! Will there be enough space?

/*
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many
passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus!
He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
 */

/*
function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}
 */

//!What's the real floor?

/*
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor
(due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take
their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3
 */

/*
const getRealFloor = n => n < 1 ? n : n < 13 ? n - 1 : n - 2;
 */

//!Parse nice int from char problem

/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old".
 The first character in the string is always a number.
 */

/*
function getAge(inputString){
  return parseInt(inputString);
}
 */

//!N-th Power

/*
This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N.
You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return
-1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
 */

/*
const index = (array, n) => array[n] === undefined ? -1 : Math.pow(array[n], n);
 */
//! Grasshopper - Check for factor

/*
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
 */

/*
function checkForFactor (base, factor) {
  return base%factor===0
}
 */

//! Is it a palindrome?

/*
Write a function that checks if a given string (case insensitive) is a palindrome.
 */

/*
function isPalindrome(x) {

  let str = x.toLowerCase();
  let half = str.length / 2;
  let leftStr = str.slice(0, Math.floor(half));
  let rightStr = str.slice(Math.ceil(half)).split("").reverse().join("");

  return leftStr === rightStr;
}
 */

//! Find the smallest integer in the array

/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
 */

/*
class SmallestIntegerFinder {

    findSmallestInt(args) {

      let smallestInt = args[0];

      for (let i = 0; i < args.length; i++) {

        let currNum = args[i];

        if (currNum < smallestInt) {

          smallestInt = currNum;
        }
      }

    return smallestInt;
  }
}
 */

//!Find Multiples of a Number

/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples
 up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever
 be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples
of 2 up to 6.
 */

/*
function findMultiples(integer, limit) {

  let result = [];

  for (let i = 1; i * integer <= limit; i++) {

    result.push(i * integer);
  }

  return result;
}
 */

//! Grasshopper - Debug sayHello

/*
Debugging sayHello function
The starship Enterprise has run into some problem when creating
 a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock
 */

/*
function sayHello(name) {
  return `Hello, ${name}`
}
 */

//!Remove exclamation marks

/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

/*
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
 */

//! Beginner - Lost Without a Map

/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
 */

/*
function maps(x){
  return x.map(n => n * 2);
}
 */

//! Training JS #1: create your first JS function and print "Hello World!"

/*
In JavaScript, your code is running in a function, let us step by step complete your first JS function.
 */

/*
helloWorld = function() {
  var str = "Hello World!";
  console.log( str );
}
 */

// ! Name Shuffler
/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
 */

/*
const nameShuffler = s => s.split(" ").reverse().join(" ");
 */

//!Beginner Series #1 School Paperwork
/*
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork
has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
Waiting for translations and Feedback! Thanks!
 */

/*
const paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m;
 */

//! Grasshopper - Basic Function Fixer
/*
Fix the function
I created this function to add five to any number that was passed in to it and return
the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?

 */

/*
function addFive(num) {
  return num + 5;
}
 */

//! L1: Set Alarm

/*
Write a function named setAlarm which receives two parameters. The first parameter,
employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation
(because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
 */

/*
const setAlarm = (employed, vacation) => employed && !vacation;
 */

//!Vowel remover
/*
function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}
 */

//! Powers of 2

/*
Complete the function that takes a non-negative integer n as input, and returns a
list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
 */

/*
function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}
 */

//!Grasshopper - Grade book

/*
Complete the function so that it finds the average of the three scores passed to
it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative
values or values greater than 100.
 */

/*
function getGrade (s1, s2, s3) {

  let mean = (s1 + s2 + s3) / 3;
  let grades = [60, 70, 80, 90, 100];

  for (let i = 0; i < grades.length; i++) {

    if (mean < grades[i]) {
      return "FDCBA"[i];
    }
  }

  return "A";
}
 */

//!What is between?

/*
Complete the function that takes two integers (a, b, where a < b)
and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
 */

/*
function between(a, b) {
  let arr = [];

  for (let i = a; i <= b; i++) {

    arr.push(i);
  }

  return arr;
}
 */


// !Sum Arrays

/*
Write a function that takes an array of numbers and returns the sum of the numbers.
The numbers can be negative or non-integer. If the array does not contain any numbers then you
should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
 */

/*
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
 */

//! Super Duper Easy

/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string
it should return "Error"
 */

/*
function problem(x){
  return typeof x === "number" ? x * 50 + 6 : "Error";
}
 */

//! Rock Paper Scissors!

/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 */

/*
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};
 */

//!Reverse List Order

/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
 */

/*
function reverseList(list) {
  return list.reverse();
}
 */

//! A wolf in sheep's clothing


/*
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now
plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you
are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3
 */

/*
function warnTheSheep(queue) {

  let wolfIdx = queue.reverse().indexOf("wolf");

  return wolfIdx === 0 ?
    "Pls go away and stop eating my sheep" :
    "Oi! Sheep number " + wolfIdx +"! You are about to be eaten by a wolf!";
}
 */


//! Square(n) Sum
/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because

 */

/*
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
*/

//!Welcome!

/*
Your start-up's BA has told marketing that your website has a large audience in Scandinavia
and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language.
Luckily you already use an API that detects the user's location, so this is an easy win.
 */

/*
const obj = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}

const greet = lg => obj[lg] ? obj[lg] : "Welcome";

 */

//!MakeUpperCase

/*
Write a function which converts the input string to uppercase.
 */

/*
function makeUpperCase(str) {
  return str.toUpperCase();
}
 */

//!Opposites Attract

/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick
a flower each. If one of the flowers has an even number of petals and the other has an odd number of
petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if
they are in love and false if they aren't.
 */

/*
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}
 */

//! Drink about

/*
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
 */

/*
function peopleWithAgeDrink(old) {

  let drinks = {
    14: "toddy",
    18: "coke",
    21: "beer",
  };

  let allAges = Object.keys(drinks).map(str => Number(str));

  let age = allAges.filter(n => old < n)[0];

  return "drink " + (age ? drinks[age] : "whisky");
};
 */

//!Grasshopper - Terminal game combat function

/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns
the player's new health. Health can't be less than 0.
 */

/*
function combat(health, damage) {
  return health < damage ? 0 : health - damage
}
 */

//!Multiplication table for number

/*
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

 */

/*
const multiTable = num => Array(10).fill(num).map((n, i) => `${i+1} * ${n} = ${(i+1) * n}`).join("\n");
 */

//! Grasshopper - Messi Goals

/*
Messi's Goal Total
Use variables to find the sum of the goals Messi scored in 3 competitions

Information
Messi goal scoring statistics:

Competition	Goals
La Liga	43
Champions League	10
Copa del Rey	5
 */

/*
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals
 */

//!The Wide-Mouthed frog!

/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat.
But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method
takes one argument animal which corresponds to the animal encountered by the frog.
If this one is an alligator (case-insensitive) return small otherwise return wide.
 */

/*
const mouthSize = animal => animal.toLowerCase() === "alligator" ? "small" : "wide";
 */

//! Plural

/*
We need a simple function that determines if a plural is needed or not.
It should take a number, and return true if a plural should be used with that number or false if not.
This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata,
where anything that isn't singular (one of something), it is plural
(not one of something).

All values will be positive integers or floats, or zero.
 */

/*
function plural(n) {
  return n !== 1;
}
 */

//!Enumerable Magic #25 - Take the First N Element

/*
Create a function that accepts a list/array and a number n,
and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:
 */

/*
function take(arr, n) {
  return arr.slice(0, n);
}
 */


//! Training JS #2: Basic data types--Number

/*
In javascript, Number is one of basic data types. It can be positive: 1,2,3,
negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

Numbers can use operators such as + - * / %
 */

/*
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1
  var b=v1
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a= v3  //set number value to a
  var b=  v1 //set number value to b
  return a-b;
}
function equal3(){
  var a= v1  //set number value to a
  var b= v5 //set number value to b
  return a*b;
}
function equal4(){
  var a=  v4 //set number value to a
  var b=  v5 //set number value to b
  return a/b;
}
function equal5(){
  var a=  v2 //set number value to a
  var b=  v3 //set number value to b
  return a%b;
}
 */

//!Exclamation marks series #11

/*
DESCRIPTION:
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
 */

/*
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')
}
 */

//! All Star Code Challenge #18

/*
Create a function that accepts a string and a single character,
and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
 */

/*
function strCount(str, letter){
  return str.split(letter).length-1
}
 */

//============================================================

//! Exclamation marks series #1

/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is
always a string, no need to verify it.
 */

/*
function remove(s){
 return s.replace(/!$/,'');
}
 */

//! Reversing Words in a String

/*
You need to write a function that reverses the words in a given string.
A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
 */

/*
function reverse(string){
  return string.split(' ').reverse().join(' ');
}
 */

//! Holiday VIII - Duty Free

/*
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that
the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle.
If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.
 */

/*
function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100))
}
 */

//! No zeros for heros

/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
 */


/*
function noBoringZeros(n) {
  return +(`${n}`.replace(/0+$/, ''))
}
 */

//!Training JS #4: Basic data types--Array

/*
In javascript, Array is one of basic data types. To define an empty array, you can use var arr=new Array()
 or var arr=[]

Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are
contained in the array.

Each element in the array has an index, use arr[index] to get the value of element.

index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].
 */

/*
function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1];
}
function pushElement(arr){
  var el=1;
  //push
  arr.push(4);
  return arr;
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
}
 */

//! Add Length

/*
What if we need the length of the words separated by a space to be added at
the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list
with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
 */

/*
function addLength(str) {
  return str.split(' ').map(word => `${word} ${word.length}`);
}
 */

//!Hello, Name or World!

/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World!
if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital
letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given
  or `name` = ""        => return "Hello, World!"
 */
/*
function hello(name) {
  if (name === undefined || name === '') {
    return 'Hello, World!';
  } else {
    return 'Hello, ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!';
  }
}
 */

//! Grasshopper - Terminal game move function

/*
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice
and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of
the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
 */

/*
const move = (position, roll) => position + roll * 2
 */

//!Determine offspring sex based on genes XX and XY chromosomes

/*
The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex
chromosomes. They are either X or Y. The female gametes or eggs however,
contain only the X sex chromosome and are homogametic.

The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes
an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote
will be XY or male.

Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm
contains the Y chromosome, return "Congratulations! You're going to have a son.";
 */

/*
function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}
 */

//!Grasshopper - Function syntax debugging

/*
Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and
fix them.
 */

/*
function main (verb, noun){
  return `${verb}${noun}`
}
 */

//! Exclusive "or" (xor) Logical Operator

/*
Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||,
and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans.
It then returns
true if exactly one of the two expressions are true, false otherwise. For example:
 */

/*
function xor(a, b) {
  return a != b;
}
 */

//! Fix your code before the garden dies!

/*
You have an award-winning garden and every day the plants need exactly
40mm of water. You created a great piece of JavaScript to calculate the amount of
water your plants will need when you have taken into consideration the amount of
rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!
 */


/*
function rainAmount(mm){
    if (mm < 40) {
         return `You need to give your plant ${(40-mm)}mm of water`
    };
 return "Your plant has had more than enough water for today!"

}
 */


//! Find the Remainder

/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
 */

/*
function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
if( a > b && b === 0) {
  return NaN;
} else if ( b > a && a === 0) {
 return NaN;
}
  return (a > b )? a % b : b % a;

}
 */


//! Hex to Decimal
/*
Complete the function which converts hex number (given as a string) to a decimal number.
 */

/*

function hexToDec(hexString){
 return  parseInt(hexString, 16);
}
 */

//Small enough? - Beginner

/*
You will be given an array and a limit value. You must check that all values in
the array are below or equal to the limit value. If they are, return true. Else,
return false.

You can assume all values in the array are numbers.
 */
/*
// !const smallEnough = (a, limit) => a.filter(n => n > limit).length === 0;
*/

//! Regular Ball Super Ball

/*
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
 */

/*
class Ball{
constructor(ballType='regular'){
this.ballType = ballType}

}
 */

//!How old will I be in 2099?
/*
Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044.
 His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can
 answer Philip's endless questions.

    Your task is to write a function that takes two parameters: the year of birth and the year to count years in
     relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he
      would be born, so your function needs to work with both dates in the future and in the past.

    Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past:
    "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very
    year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for
both "year" and "years", depending on the result.
 */

/*
function  calculateAge(a,b) {
  if (a>b&&+a-b==1)return `You will be born in ${+a-b} year.`
  else if (a<b&&+b-a==1)return `You are ${b-a} year old.`
  else if (a>b)return `You will be born in ${+a-b} years.`
  else if (a<b) return `You are ${b-a} years old.`
  return 'You were born this very year!'
}
 */

//!Take the Derivative

/*
This function takes two numbers as parameters, the first number being the coefficient, and the second number being
the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an
expression (like 28x^7). "^1" should not be truncated when exponent = 2.
 */

/*
function derive(coefficient,exponent) {
  return `${coefficient*exponent}x^${exponent-1}`
}
 */


//!Remove duplicates from list

/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

 */

/*
function distinct(a) {
  return [...new Set(a)];
}
 */

//!Find the position!
/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
 */

/*
function position(letter){
  return `Position of alphabet: ${letter.charCodeAt()-96}`
}
 */

//! Training JS #7: if..else and ternary operator

/*
In JavaScript, if..else is the most basic conditional statement,
it consists of three parts:condition, statement1, statement2, like this:

if (condition) statementa
else           statementb
 */

/*
function saleHotdogs(n){
    return n<5?100*n:n>=5 && n<10?95*n:n>=10?90*n:true;
}

 */
// !Bin to Decimal

/*
Complete the function which converts a binary number (given as a string) to a decimal number.
 */


/*
function binToDec(bin){
  return parseInt(bin,2);
}
 */

//! Training JS #5: Basic data types--Object

/*
In javascript, Object is one of basic data types.
Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization,
like this:

var animal={name:"dog"}
you can also set/get some properties after the object
definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")
 */

/*
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
 */

//!5 without numbers !!

/*
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)
 */

/*
function unusualFive() {
  return ['banan', 'orange', 'apple', 'kiwi', 'lemon'].length;
}
 */

//! No Loops 2 - You only need one

/*
*** No Loops Allowed ***

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value,*
*  without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains*  the value, false if not.
* With strings you will need to account for case.
 */

/*
function check(a, x) {
  return a.includes(x);
}
 */

//! L1: Bartender, drinks!

/*
Complete the function that receives as input a string, and produces outputs according
to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
 */

/*
function getDrinkByProfession(param) {
  param = param.toLowerCase();

  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return  "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}
 */

//!Welcome to the City

/*
Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that
 name will be an array consisting of one or more values that should be joined together with one space between each, and
 the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
 */

/*
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
 */

//!Training JS #3: Basic data types--String

/*
In javascript, String is one of basic data types. Use "" or '' to declare a
string variable. It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..

String can use operators +, Connect two or more strings together.
 */

/*
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}
 */

//! Printing Array elements with Comma delimiters

/*
nput: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level


 */

/*
function printArray(array){
  return array.join()
}
 */

//!Multiple of index

/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
 */


/*
function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0);
}
 */

//! Sum of differences in array

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
 */

/*

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
 */

//! String cleaning

/*
Your boss decided to save money by purchasing some cut-rate optical character
recognition software for scanning in the text of old novels to your database.
At first it seems to capture words okay, but you quickly notice
that it throws in a lot of numbers at random places in the text.
 */

/*
function stringClean(s){
  return s.replace(/\d/g, "");
}
 */

//! simple calculator

/*
You are required to create a simple calculator that returns the result of addition, subtraction,
multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown
value" must be returned.
 */

/*
const calculator = (a,b,sign) => {
  if(sign !== '+' && sign !== '-' && sign !== '/' && sign !== '*') {
    return 'unknown value';
  } else if(typeof a !== 'number' || typeof b !== 'number') {
    return 'unknown value';
  } else if(sign === '+') {
    return a + b;
  } else if(sign === '-') {
    return a - b;
  } else if(sign === '*') {
    return a * b;
  } else if(sign === '/') {
    return a / b;
  }
}
 */

//! Do you speak "English"?

/*
Given a string of arbitrary length with any ascii characters. Write a function to determine
whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef"
is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
 */

/*
function spEng(sentence){

  for (let i = 0; i < sentence.length - 6; i++) {

    if (sentence.slice(i, i + 7).toLowerCase() === "english") {
      return true;
    }
  }

  return false;
}
 */

//!Grasshopper - Array Mean

/*
Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together
and divide by the number of values in the list.

For an example list of 1, 3, 5, 7
 */

/*
var findAverage = function (nums) {
  return nums.reduce((a,b)=>(a+b),0)/nums.length
}
 */

//!USD => CNY

/*
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer,
 and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

Examples (Input -> Output)
15  -> '101.25 Chinese Yuan'
465 -> '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented
as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
 */

/*
const usdcny = usd => `${(usd*6.75).toFixed(2)} Chinese Yuan`;
 */

//!Enumerable Magic - Does My List Include This?

/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
 */

/*
function include(arr, item){
  return arr.includes(item);
}
 */

//!Lario and Muigi Pipe Problem

/*
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that
 there is no duplicates.
 */


/*
function pipeFix(numbers){
  let q=Math.max.apply(null,numbers)
  let result =[]
  for (let i=Math.min.apply(null,numbers); i<=q;i++) result.push(i)
return result
}
 */

//!How many stairs will Suzuki climb in 20 years?

/*
Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual.
Some days he climbs more stairs than others depending on the number of students he must train in the
morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year
marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20
 */

/*
function stairsIn20(s){
  return   s
    .reduce((arr, day) => arr.concat(...day), [])
    .reduce((total, stairs) => total + stairs, 0) * 20
}
 */


//!Area of a Square

/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given
as the input. Return the result rounded to two decimals.
 */

/*
function squareArea(A){
  return Number(Math.pow(2 * A / 3.1416, 2).toFixed(2))

}
 */

//!Correct the mistakes of the character recognition software

/*
Character recognition software is widely used to digitise printed texts.
This the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter),
are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
 */

/*
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
 */

//! Simple validation of a username with regex

/*
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
 */

/*
function validateUsr(username) {
  return /^([a-z0-9_]){4,16}$/.test(username)

}
 */

//!Price of Mangoes

/*
mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
 */
/*

function mango(quantity, price){
let q=Math.floor(quantity/3)
return (quantity-q)*price
}
 */

//! Return the day

/*
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
 */

/*
function whatday(num) {
  switch(num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
}
 */

//! Training JS #8: Conditional statement--switch

/*
In JavaScript, switch can replace multiple if statements.
 */

/*
function howManydays(month){
  switch (month){
  case 1:return 31;
  case 2:return 28;
  case 3:return 31;
  case 4:return 30;
  case 5:return 31;
  case 6:return 30;
  case 7:return 31;
  case 8:return 31;
  case 9:return 30;
  case 10:return 31;
  case 11:return 30;
  case 12:return 31;

  }
  return month;
}
 */
// Define a card suit

/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
 */

/*
function defineSuit(card) {
    if (card.includes('♣')) return 'clubs'; if (card.includes('♠')) return 'spades';
    if (card.includes('♥')) return 'hearts'; if (card.includes('♦')) return 'diamonds';
}
*/

//!Remove First and Last Character Part Two

/*
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones
 but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty,
return an empty value (represented as a generic value NULL in the examples below).
 */

/*
function array(arr){
  return arr.split(',').slice(1,-1).join(' ')|| null

}
 */

//! Jaden Casing Strings

/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010)
and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter.
When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll
 have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings
 are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed
 them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 */

/*

 */

//! 7 - First-Class Function Factory
/*
Write a function, factory, that takes a number as its parameter and returns another function.

The returned function should take an array of numbers as its parameter, and return an array of
those numbers multiplied by the number that was passed into the first function.

In the example below, 5 is the number passed into the first function. So it returns a function
that takes an array and multiplies all elements in it by five.

Translations and comments (and upvotes) welcome!

Example
var fives = factory(5);       // returns a function - fives
var myArray = [1, 2, 3];
fives(myArray);               //returns [5, 10, 15];
 */

/*
function factory(x){
    return array => array.map( a => a*x );
}
 */

//!The wheat/rice and chessboard problem


/*
I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat,
 for some reason) problem, but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the
 first square, 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.

Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to
 which square of the chessboard one should count in order to get at least as many.
 */

/*
function squaresNeeded(grains){
  return Math.ceil(Math.log2(grains+1))
}
 */

//! Function Composition

/*
Function composition is a mathematical operation that mainly presents itself in lambda calculus and
computability. It is explained well here, but this is my explanation, in simple mathematical notation:

f3 = compose( f1 f2 )
   Is equivalent to...
f3(a) = f1( f2( a ) )
Your task is to create a compose function to carry out this task, which will be passed two functions
or lambdas. Ruby functions will be passed, and should return, either a proc or a lambda. Remember
that the resulting composed function may be passed multiple arguments!

compose(f , g)(x)
=> f( g( x ) )
This kata is not available in haskell; that would be too easy!
 */

/*
const compose = (f,g) => (...args) => f(g(...args));
 */

//! Function composition 1
/*
Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be
combined to form a new function which first adds one and then multiplies by two, as follows:

const addOne = (a) => a + 1
const multTwo = (b) => b * 2
const addOneMultTwo = (c) => multTwo(addOne(c))

addOneMultTwo(5) // returns 12
Combining functions like this is called function composition. Functional programming libraries in Javascript such as
Ramda include a generic compose function which does the heavy lifting of combining functions for you. So you could
implement addOneMultTwo as follows:

const addOneMultTwo = compose(multTwo, addOne)

addOneMultTwo(5) // returns 12
A simple implementation of compose, could work as follows:

const compose = (f, g) => (a) => f(g(a))
The arguments f and g are unary functions (i.e. functions which take one argument). The problem with this compose
function is that it only composes two functions. Your task is to write a compose function which can compose any number
of functions together.
 */

/*
const compose = (...fns) => arg => fns.reduceRight((res, fn) => fn(res), arg);
 */

//! SantaClausable Interface

/*
You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. There is only a concept of
inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent
 prototype / class. We want to find out, whether a given object fulfils the requirements to implement the
  "SantaClausable" interface. We need to implement a method which checks for this interface.
 */

/*
function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
    return typeof obj[methodName] == 'function';
  });
}
 */

//!JavaScript class-like objects

/*
For this exercise you should create a JavaScript class like object called "Animal" that takes in
 "name" and "type" arguments. It should have a toString method that returns a human readable string
 indicating the argument information passed in. It should also allow the name property to be set.

The following is an example of how the final code would be used and what the expected return values
should be:

var dog = new Animal('Max', 'dog');
dog.toString(); // should return 'Max is a dog'
dog.type; // should == 'dog'
dog.name; // should == 'Max'
dog.name = 'Lassie'; // should set name to 'Lassie'
 */

/*
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}
 */

//! The Newest Function

/*
You're a junior dev fresh out of a three-month web development bootcamp. You've just taken on a
lucrative contract from a trendy startup. You'll get paid more money than you'd ever thought you'd
have. It's somewhat unclear what product or service this startup even sells, and their API
documentation might as well have been written in Brainfuck, but you'd better learn fast, or you won't
finish before the deadline and get paid.

Your assignment today is to write a function in JavaScript. It seems simple enough, but the CEO
 insists that all developers who work at his company only use the absolute cutting-edge of technology.
  You must use only the newest of features and frameworks. But such new software tends to be rife with bugs...

Create a function that won't throw an error no matter how new it is.
 */

/*
let newFunction = function newFunc() {
  return newFunc;
};
 */

//!Fun with ES6 Classes #2 - Animals and Inheritance


/*
Overview
Preloaded for you in this Kata is a class Animal:

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
 */

/*
class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 0;
    this.status = status;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master = "") {
    super();
    this.master = master;
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "dog";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
 */

//! Fun with ES6 Classes #4 - Cubes and Setters
/*
Overview
In Fun with ES6 Classes #3 - Cuboids, Cubes and Getters, we learned that if we knew all the dimensions
(i.e. length, width, height) of a cuboid, we could easily work out its corresponding volume and
 surface area. The way we achieved this in our code was by the use of getters which automatically
 computed the volume and surface area of the cuboid whenever either one of length, width, height
 changed. However, in the previouos exercise, one thing we could not do is define setters for surface
 area or volume of a cuboid because for a given volume/SA, there were an infinite number of
 possibilities to the dimensions of the cuboid.
 */

/*
class Cube{
      constructor(length){
        this.length = length;
    }
    get surfaceArea() {
        return this.length * this.length * 6;
    }
    get volume() {
        return this.length * this.length  * this.length;
    }
    set surfaceArea(newArea){
            this.length = Math.sqrt(newArea / 6) ;
    }
    set volume(newVolume){
            this.length = Math.pow(newVolume, (1/3));
    }
}
 */

//!Sum of two lowest positive integers
/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4
positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
 */

/*
function sumTwoSmallestNumbers(numbers) {
  let a=numbers.sort((a,b)=>a-b)
  return a[0]+a[1]
};
 */

//! Simple Fun #176: Reverse Letter

/*
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
 */


/*
reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');
 */

//! Anagram Detection
/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return
false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
 */


/*
function isAnagram (test, original) {
  return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}
 */

//!Categorize New Member

/*
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
 */

//! Categorize New Member

/*
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
 */

//! Find the stray number

/*
function stray(numbers) {
  return numbers.find(
    number => numbers.indexOf(number) === numbers.lastIndexOf(number)
  );
}
 */

//! Beginner Series #2 Clock

/*
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
 */


//! 



