/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function(array){
  // 인풋 어레이를 리듀스해서 객체의 키로 저장, 값은 0
  // Array 를 리듀스 돌려 있으면 밸류값을 하나씩 올리고
  // 밸류값들 중 0이 있으면 false
  let arrayTocheck = this;
  
  let inputArrayToObj = array.reduce(function(acc, curr){
    acc[curr]=0;
    return acc;
  },{});

  for(let i=0; i<arrayTocheck.length; i++) {
    if(inputArrayToObj[arrayTocheck[i]]!==undefined) {
      inputArrayToObj[arrayTocheck[i]]++;
    }
  }
  
  if(Object.values(inputArrayToObj).indexOf(0)>-1) return false;
  return true;


};
