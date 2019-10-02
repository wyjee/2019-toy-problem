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
  // 키 값으로 각 글자값을 주자
  // 남은 거는 붙여서 앞뒤로 슬라이스해서 쓰자

  let result = {};
  let copy = string.slice();
  for (let i = 0; i < copy.length; i++) {
    let spliced = copy.slice(0, i) + copy.slice(i + 1);
    console.log(spliced);
    for (let j = 1; j < spliced.length; j++) {
      let new_spliced = spliced.slice(0, j) + spliced.slice(j + 1);
      console.log("new", new_spliced);
      result[string[i]] = string[i] + new_spliced;
      console.log("object_result", result);
    }
  }
  console.log("result", Object.values(result));
  return Object.values(result);
};
