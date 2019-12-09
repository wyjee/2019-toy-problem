/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  // Your code here.
  let result = []

  var helper = function(word='',chars){
    if(word.length  === string.length){
      result.push(word)
    }
    for(let i=0;i<chars.length; i++){
      let characters = chars.slice(0,i)+chars.slice(i+1)
      helper((word += chars[i]), characters);
    }
  }
  helper('',string)
  console.log('result',result)
return result
//   let order =[];
//   for(let i=0; i<result.length; i++){
//     if(result.slice(i+1).indexOf(result[i])<0) order.push(result[i])
//   }
// console.log('order',order)
//   return order;
};
