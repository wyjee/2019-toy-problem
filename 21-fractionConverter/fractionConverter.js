/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  let dotIndex = number.toString().indexOf(".");
  let exponent = number.toString().length - dotIndex - 1;
  console.log(exponent);
  let molecule = number.toString().slice(dotIndex + 1);
  let denominator = Math.pow(10, exponent);
  function findGCD(a, b) {
    for (let i = a < b ? a : b; i > 0; i--) {
      if (a % i === 0 && b % i === 0) return i;
    }
  }
  let GCD = findGCD(molecule, denominator);
  return molecule / GCD + "/" + denominator / GCD;
};

// toFraction(0.88)
