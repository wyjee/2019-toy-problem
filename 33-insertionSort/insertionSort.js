/*jshint expr:true*/

/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function(array) {
  var transform = [];

  for (var i = 0; i < array.length; i++)
    transform.push({ value: array[i], i: i });

  return transform;
};

var insertionSort = function(array) {
  array.sort(function(current, next) {
    return current.value - next.value;
  });

  return array;
  // // Your code goes here. Feel free to add helper functions if needed.
  // for (let i = 0; i < array.length; i++) {
  //   // 인덱스 값을 하나씩 순회
  //   if (array[i + 1].value < array[i].value) {
  //     // 다음 인덱스 값의 value 가 현재 인덱스 값의 value 보다 작으면 현재 인덱스 값의 value를 저장했다가
  //     let val = array[i];
  //     for (let j = i; j > 0; j--) {
  //       // 그 값을 가지고, 현재 인덱스까지 처음부터 다시 순회하면서 제자리 찾기.. !
  //     }
  //   }
  // }
  // return array;
};
