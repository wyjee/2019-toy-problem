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
    let middle = array.length ===1 ? 0 : Math.floor(array.length/2);
    let midNum = array[middle];

    if(midNum === target) {
        console.log('WHERE ',array, index, middle)
        return index + middle;
    }
    else if (target < midNum) {
        let lowerSliced = array.slice(0, middle);
        return binarySearch(lowerSliced, target, index);
    } else if (target > midNum) {
        let highSliced = array.slice(middle);
        return binarySearch(highSliced, target, index + middle);
    }
    else {
        return null;
    }
};

