/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function(string) {
  // TODO: Your code here!
  var result = [0, 0];
  var curr = [0, 0];

  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      curr[1] = i;
      if (curr[1] - curr[0] > result[1] - result[0]) {
        result = curr;
      }
    } else {
      curr = [i, i];
    }
  }

  return result;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function(len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
