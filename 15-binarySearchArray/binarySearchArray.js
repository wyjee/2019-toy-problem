/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target, index) {
    if(index === undefined) index = 0;
    let middle = array.length ===1 ? 0 :Math.floor(array.length/2);
    let midNum = array[middle];
// console.log(
//   "@",
//   array,
//   target,
//   "Index:",
//   index,
//   "midNum === target",
//   midNum,
//   target,
//   midNum === target
// );
    if(midNum === target) {
        console.log(array,target,index + middle);
        return index + middle;
    }
    if (target < midNum) {
        let lowerSliced = array.slice(0, middle);
        binarySearch(lowerSliced, target, index);
    } else if (target > midNum) {
        let highSliced = array.slice(middle);
        binarySearch(highSliced, target, index + middle);
    }
    else {
        return null;
    }
};

