/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 6
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
    let acc = {};
    for (let i=0; i<arr.length; i++) {
      let current = arr[i]
      if(acc[current]===undefined){
        acc[current] = 1;
      }
      else if (typeof acc[current] === "string"){
        continue;
      }
      
      if(arr[i+1]){
        let sliced = arr.slice(i + 1);
        console.log('If it Exists',sliced.indexOf(current));
        if(sliced.indexOf(current)>-1){

      //if the curr number exists in Array 'sliced'
        sliced.reduce((accumulator,curr)=>{
          console.log('in reduce Method acc and curr',accumulator,curr)
          if(current===curr){
            acc[current] +=1;
          }
        },{})
      //check total by reducing
console.log('check total',acc)
      //mark if 'odd' number
      if(acc[current]%2===1){
        acc[current]='odd'
      }
      //mark and return if even number
      if(acc[current]%2===0){
        acc[current]='even'
        return current;
      }
      }
      continue;
      }
      continue;
    }
    return null;
};
