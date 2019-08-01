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
  let arrayTocheck = this;
  
  let thisArrayToObj = arrayTocheck.reduce(function(acc, curr){
    acc[curr]=0;
    return acc;
  },{});
  for(let i=0; i<array.length; i++) {
    if(thisArrayToObj[array[i]]!==undefined) {
      thisArrayToObj[array[i]]++;
    }
  }
  if(Object.values(thisArrayToObj).indexOf(0)>-1) return false;
  return true;

};
