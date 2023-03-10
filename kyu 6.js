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


//! 