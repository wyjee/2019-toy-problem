/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */
let count = 0;
var nthFibonacci = function (n) {
  // TODO: implement me!
  let cache = {
    0 : 0,
    1 : 1
  };
  if([...arguments].length) {
    for(let i=2; i<=n; i++) {
      cache[i] = cache[i-1] + cache[i-2];
    }
    return cache[n];
  }
  else {
    if(cache[count]) {
      count++;
      return cache[count];
    }
    for(let i=2; i<=count; i++) {
      cache[i] = cache[i-1] + cache[i-2];
    }
    return cache[n];
  }
  

};


// * Linear time and iterative way
// var nthFibonacci = function(n) {
//   // TODO: implement me!
//   let cache = [];

//   for (let i = 0; i <= n; i++) {
//     if (i === 0 || i === 1) cache[i] = i;
//     else {
//       cache[i] = cache[i - 2] + cache[i - 1];
//     }
//   }

//   return cache[n];
// };
