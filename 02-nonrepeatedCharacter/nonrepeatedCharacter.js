/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  if(string.length === 0) return null;
  for(let i=1; i<string.length; i++) {
    if(!(string.slice(0,i-1).concat(string.slice(i)).includes(string[i-1]))) {
      // console.log('string',string,'i',i);
      return string[i-1];
    }
  }
  return null;
};
