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
  let result = arraySorted[0]*arraySorted[1]*arraySorted[2];

  if(result<(arraySorted[0]*arraySorted[arraySorted.length-1]*arraySorted[arraySorted.length-2])) {
    return arraySorted[0]*arraySorted[arraySorted.length-1]*arraySorted[arraySorted.length-2];
  }
  return result;
};
