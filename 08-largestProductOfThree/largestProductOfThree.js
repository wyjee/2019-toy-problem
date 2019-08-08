/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  let arraySorted = array.sort((a,b)=>b-a);
  // console.log(arraySorted)
  return arraySorted[0]*arraySorted[1]*arraySorted[2];
};


// var largestProductOfThree = function(array) {
//   let result = 1;
//   let copy = array.slice()
//   let i= 3
//   let largestNumberI;
//   while (i>0) {
//     largestNumberI = copy.indexOf(Math.max(...copy));
//     result*=copy[largestNumberI];
//     copy.splice(largestNumberI,1)
//     console.log('array',array,'copy',copy,'result',result)
//     i--;
//   }
//   return result;
// };

