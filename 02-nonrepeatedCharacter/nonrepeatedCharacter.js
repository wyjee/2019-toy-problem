/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  //check charac in string by for loop
  //slice & check contains
  //if not return
  // let chaInString = string.split('');
  // let splicedStr = string.slice(0,i-1)
  //splice(0,i-1).join(string.slice(i))
  if(string.length === 0) return null;
  for(let i=1; i<string.length; i++) {
    if(!(string.slice(0,i-1).concat(string.slice(i)).includes(string[i-1]))) {
      console.log('string',string,'i',i);
      return string[i-1];
    }
  }
  return null;
};
