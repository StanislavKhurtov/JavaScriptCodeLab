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
return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
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