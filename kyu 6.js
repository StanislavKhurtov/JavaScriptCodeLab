<<<<<<< HEAD
//! Pair of gloves

/*

Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine
the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute,
assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
 */

/*
function numberOfPairs(gloves){
   let arr = gloves.slice().sort((a,b)=>a.localeCompare(b))
   let pairs = 0;
   for (let i=1;i<arr.length;i++){
     if (arr[i-1]===arr[i]){
       pairs++
       i++
     }
   }
   return pairs
}
 */

//! Sorting by bits

/*
In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on
 bits they have.

E.g Given the array [7, 6, 15, 8]

7 has 3 on bits (000...0111)
6 has 2 on bits (000...0011)
15 has 4 on bits (000...1111)
8 has 1 on bit (000...1000)
So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, compare their real values instead.

E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the
integer 10 is less than 12 so it comes first in sorted order.

Your task is to write the function sortBybit() that takes an array of integers and sort them as
described above.

Note: your solution has to sort the array in place.

Example:

[3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]
 */

/*
function sortByBit(arr) {
  const countBit=(bit)=>bit.toString(2).replace(/[0]/g,'').length
  return arr.sort((a,b)=>countBit(a)===countBit(b)?a-b:countBit(a)-countBit(b))
}
 */

//! Let's Recycle!

/*
Task
You will be given a list of objects. Each object has type, material, and possibly secondMaterial.
The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material
(and secondMaterial if it's present), by listing the type's of objects that should go into those bins.
*/

/*
function recycle(array) {
  const obj = {'paper': [], 'glass': [], 'organic':[], 'plastic': []};
  for (let i of array) {
    obj[i.material].push(i.type);
    if (i.secondMaterial !== undefined){
      obj[i.secondMaterial].push(i.type)
    }
  }
  return [obj['paper'], obj['glass'], obj['organic'], obj['plastic']];
}
 */


//!Javascript Mathematician = kyu 7!!!

/*
You are writing a function that takes two sets of arguments of arbitrary length.
The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17
 */


/*

const calculate = (...x) => (...y) => {
  return [].concat(x, y).reduce((a, b) => a + b, 0);
};
 */

//!Javascript from the Inside #1 : Map

/*
#Description Your task is to implement our beloved Array.prototype.map function from a scratch, and yes, it has to be
inside the Array's prototype. Don't know what a 'prototype' is? This could help you a little as well as this kata.

Moving on, the defaults for Array.prototype.map, Array.prototype.reduce, Array.prototype.reduceRight and
Array.prototype.forEach will be banned, in other words you'll have to create map from scratch.
 */


/*
Array.prototype.map = function (cb,context){
  const length = this.length
  const arr = new Array(length)
  for (let i=0;i<length;i++){
    if (i in this){
      arr[i]=cb.call(context,this[i],i,this)
    }
  }
  return arr
}
 */



//! !Javascript from the Inside #2: Filter

/*
Previously: Map

#Your Task Implement our beloved Array,prototype.filter from scratch.

Example of Filter

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lower_than_six = (x) => x < 6
var one_to_five = one_to_nine.filter(lower_than_six);
// Expected
[1, 2, 3, 4, 5]

 */

/*

Array.prototype.filter = function (f, receiver) {
    let len = this.length;
    let acc = [];
    for (let i = 0; i < len; i++) {
        if (i in this && f.call(receiver, this[i], i, this)) {
            acc.push(this[i]);
        }
    }
    return acc;
};
 */

//!Power .bind()
/*
You probably know about Function.prototype.bind method in JavaScript. It returns a copy of the original function but
this function will always be called in the specified context. The problem is that you can't rebind another context any
 more.
 */

/*
Function.prototype.bind = function (rootContext) {
  return (childContext = rootContext) => this.call(childContext, childContext);
};
 */

//! Closures and Scopes
/*
We want to create a function, which returns an array of functions, which return their index in the array. For better
 understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected.
 Can you spot, what's wrong with it? A test fixture is also available
 */

/*
function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function() {
      return i;
    });
  }

  return callbacks;
}
 */

//! Can you keep a secret?
/*
There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns
an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
 */

/*
function createSecretHolder(secret) {
  return {
    getSecret: function() {
      return secret;
    },
    setSecret: function(v) {
      secret = v;
    }
  };
}
 */

//! The Coupon Code

/*

 */

/*
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) >= Date.parse(currentDate)
  );
}
 */

//! Unlucky Days

/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
 */


/*
function unluckyDays(year) {
  let date = new Date(year, 0).getTime();
  let d = 1000 * 60 * 60 * 24;
  let friday = 0;
  for (let i = 0; i < 365; i++) {
    date += d;
    if (new Date(date).getDay() === 5 && new Date(date).getDate() === 13)
      friday++;
  }
  return friday;
}
 */

//!Angle Between Clock Hands

/*
Given a Date (in JS and Ruby) or hours and minutes (in C and Python), return the angle between
 the two hands of a 12-hour analog clock in radians.

Notes:
The minute hand always points to the exact minute (there is no seconds hand).
The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 because the hour
hand is already half way between 6 and 7.
Return the smaller of the angles ( <= π ).
Return π if the hands are opposite.
Examples
at noon the angle is: 0
at 3:00 the angle is: π/2 (90 degrees)
at 6:00 the angle is: π (180 degrees)
at 9:00 the angle is: π/2 (90 degrees)
 */

/*
function handAngle (date) {
  var pi2 = Math.PI*2;
  var m = date.getMinutes()/60,
  h = (date.getHours()+m)/12;

  var angle = Math.abs(h-m)*pi2;
  return Math.min( angle, pi2-angle )

}
 */

//! Run-length encoding

/*
Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which
the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than
 as the original run. Wikipedia

Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays)
[ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character
 sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values
  si and si+1 should differ.
 */

/*
var runLengthEncoding = function(str) {
  const arr = [];
  let value = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      arr.push([value, str[i]]);
      value = 1;
    } else {
      value++;
    }
  }
  return arr;
};
 */

//!Walk the Object Path

/*
Implement the method find which takes in an two parameters object and path. The path will
be a period-delimited string of properties that we will use to traverse through our object to find our target value.

Check out this Codecast to get started! https://codecast.qualified.io/interaction/594197b92f524d001c1ab790
 */


/*
function find(obj,path) {
    path = path.split(/[.]/)
    for(i in path){
        if(obj.hasOwnProperty(path[i]) === true) {
            obj = obj[path[i]];
        }else {
            return undefined;
        }
    }
    return obj;
}


*/

//! My Language Skills

/*
Task
You are given a dictionary/hash/object containing some languages and your test results in the
given languages. Return the list of languages where your test score is at least 60, in descending
order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
 */

/*
function myLanguages(results) {
  return Object.keys(results)
    .filter(v => results[v] >= 60)
    .sort((a, b) => results[b] - results[a]);
}
 */

//!JavaScript Array Filter

/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6).
Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
 */
/*
function getEvenNumbers(numbersArray){
    return numbersArray.filter(value=>{if(value%2==0)return value})
}
 */
=======
//! Pair of gloves

/*

Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine
the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute,
assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
 */

/*
function numberOfPairs(gloves){
   let arr = gloves.slice().sort((a,b)=>a.localeCompare(b))
   let pairs = 0;
   for (let i=1;i<arr.length;i++){
     if (arr[i-1]===arr[i]){
       pairs++
       i++
     }
   }
   return pairs
}
 */

//! Sorting by bits

/*
In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on
 bits they have.

E.g Given the array [7, 6, 15, 8]

7 has 3 on bits (000...0111)
6 has 2 on bits (000...0011)
15 has 4 on bits (000...1111)
8 has 1 on bit (000...1000)
So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, compare their real values instead.

E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the
integer 10 is less than 12 so it comes first in sorted order.

Your task is to write the function sortBybit() that takes an array of integers and sort them as
described above.

Note: your solution has to sort the array in place.

Example:

[3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]
 */

/*
function sortByBit(arr) {
  const countBit=(bit)=>bit.toString(2).replace(/[0]/g,'').length
  return arr.sort((a,b)=>countBit(a)===countBit(b)?a-b:countBit(a)-countBit(b))
}
 */

//! Let's Recycle!

/*
Task
You will be given a list of objects. Each object has type, material, and possibly secondMaterial.
The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material
(and secondMaterial if it's present), by listing the type's of objects that should go into those bins.
*/

/*
function recycle(array) {
  const obj = {'paper': [], 'glass': [], 'organic':[], 'plastic': []};
  for (let i of array) {
    obj[i.material].push(i.type);
    if (i.secondMaterial !== undefined){
      obj[i.secondMaterial].push(i.type)
    }
  }
  return [obj['paper'], obj['glass'], obj['organic'], obj['plastic']];
}
 */


//!Javascript Mathematician = kyu 7!!!

/*
You are writing a function that takes two sets of arguments of arbitrary length.
The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17
 */


/*

const calculate = (...x) => (...y) => {
  return [].concat(x, y).reduce((a, b) => a + b, 0);
};
 */

//!Javascript from the Inside #1 : Map

/*
#Description Your task is to implement our beloved Array.prototype.map function from a scratch, and yes, it has to be
inside the Array's prototype. Don't know what a 'prototype' is? This could help you a little as well as this kata.

Moving on, the defaults for Array.prototype.map, Array.prototype.reduce, Array.prototype.reduceRight and
Array.prototype.forEach will be banned, in other words you'll have to create map from scratch.
 */


/*
Array.prototype.map = function (cb,context){
  const length = this.length
  const arr = new Array(length)
  for (let i=0;i<length;i++){
    if (i in this){
      arr[i]=cb.call(context,this[i],i,this)
    }
  }
  return arr
}
 */



//! !Javascript from the Inside #2: Filter

/*
Previously: Map

#Your Task Implement our beloved Array,prototype.filter from scratch.

Example of Filter

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lower_than_six = (x) => x < 6
var one_to_five = one_to_nine.filter(lower_than_six);
// Expected
[1, 2, 3, 4, 5]

 */

/*

Array.prototype.filter = function (f, receiver) {
    let len = this.length;
    let acc = [];
    for (let i = 0; i < len; i++) {
        if (i in this && f.call(receiver, this[i], i, this)) {
            acc.push(this[i]);
        }
    }
    return acc;
};
 */

//!Power .bind()
/*
You probably know about Function.prototype.bind method in JavaScript. It returns a copy of the original function but
this function will always be called in the specified context. The problem is that you can't rebind another context any
 more.
 */

/*
Function.prototype.bind = function (rootContext) {
  return (childContext = rootContext) => this.call(childContext, childContext);
};
 */

//! Closures and Scopes
/*
We want to create a function, which returns an array of functions, which return their index in the array. For better
 understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected.
 Can you spot, what's wrong with it? A test fixture is also available
 */

/*
function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function() {
      return i;
    });
  }

  return callbacks;
}
 */

//! Can you keep a secret?
/*
There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns
an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
 */

/*
function createSecretHolder(secret) {
  return {
    getSecret: function() {
      return secret;
    },
    setSecret: function(v) {
      secret = v;
    }
  };
}
 */

//! The Coupon Code

/*

 */

/*
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) >= Date.parse(currentDate)
  );
}
 */

//! Unlucky Days

/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
 */


/*
function unluckyDays(year) {
  let date = new Date(year, 0).getTime();
  let d = 1000 * 60 * 60 * 24;
  let friday = 0;
  for (let i = 0; i < 365; i++) {
    date += d;
    if (new Date(date).getDay() === 5 && new Date(date).getDate() === 13)
      friday++;
  }
  return friday;
}
 */

//!Angle Between Clock Hands

/*
Given a Date (in JS and Ruby) or hours and minutes (in C and Python), return the angle between
 the two hands of a 12-hour analog clock in radians.

Notes:
The minute hand always points to the exact minute (there is no seconds hand).
The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 because the hour
hand is already half way between 6 and 7.
Return the smaller of the angles ( <= π ).
Return π if the hands are opposite.
Examples
at noon the angle is: 0
at 3:00 the angle is: π/2 (90 degrees)
at 6:00 the angle is: π (180 degrees)
at 9:00 the angle is: π/2 (90 degrees)
 */

/*
function handAngle (date) {
  var pi2 = Math.PI*2;
  var m = date.getMinutes()/60,
  h = (date.getHours()+m)/12;

  var angle = Math.abs(h-m)*pi2;
  return Math.min( angle, pi2-angle )

}
 */

//! Run-length encoding

/*
Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which
the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than
 as the original run. Wikipedia

Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays)
[ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character
 sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values
  si and si+1 should differ.
 */

/*
var runLengthEncoding = function(str) {
  const arr = [];
  let value = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      arr.push([value, str[i]]);
      value = 1;
    } else {
      value++;
    }
  }
  return arr;
};
 */

//!Walk the Object Path

/*
Implement the method find which takes in an two parameters object and path. The path will
be a period-delimited string of properties that we will use to traverse through our object to find our target value.

Check out this Codecast to get started! https://codecast.qualified.io/interaction/594197b92f524d001c1ab790
 */


/*
function find(obj,path) {
    path = path.split(/[.]/)
    for(i in path){
        if(obj.hasOwnProperty(path[i]) === true) {
            obj = obj[path[i]];
        }else {
            return undefined;
        }
    }
    return obj;
}


*/

//! My Language Skills

/*
Task
You are given a dictionary/hash/object containing some languages and your test results in the
given languages. Return the list of languages where your test score is at least 60, in descending
order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
 */

/*
function myLanguages(results) {
  return Object.keys(results)
    .filter(v => results[v] >= 60)
    .sort((a, b) => results[b] - results[a]);
}
 */

//!JavaScript Array Filter

/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6).
Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
 */
/*
function getEvenNumbers(numbersArray){
    return numbersArray.filter(value=>{if(value%2==0)return value})
}
 */
>>>>>>> 1301609aa3ac1be36c401f786e09f59ae5be150d
