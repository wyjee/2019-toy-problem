/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  let items = {}; // [{character: '', number:''},{character: '', number:''}]
  for (
    let i = 0;
    i < string.length;
    i++
  ) {
    if (
      items.hasOwnProperty(string[i])
    )
      items[string[i]]++;
    else {
      items[string[i]] = 1;
    }
  }

  let order = Object.keys(items)
  for(let j=0;j<order.length; j++){
    order[j] = items[order[j]] + order[j];
  }
  order.sort();

let result =[]
let innerOrder=[]
let n=order.length
for(let k = order.length-1; k>-1; k--){
  
  if(n!==order[k][0]){
    if(innerOrder.length>0) {
      let Inner = innerOrder.reverse();
      result.push(Inner)
      innerOrder=[]
    }

  }
     innerOrder.push(order[k]);
      n = order[k][0]; 
      if(k===0){
        let Inner = innerOrder.reverse();
        result.push(Inner);
      }
}

result=result.reduce((acc, val) => acc.concat(val), []);

for (let l=0; l<result.length; l++){
  console.log('index',l,result[l] , [result[l][1], result[l][0]]);
  result[l]=[result[l][1],Number(result[l][0])]
}
console.log('Result~!',result)
return result
  // -------------sort by object values --------------
  // let order = Object.keys(items)
  // for(let j=0;j<order.length; j++){
  //   order[j]={character: order[j], number: items[order[j]]}
  // }

  // order.sort(function(a, b) {
  //   if (a.number < b.number) {
  //     return 1;
  //   }
  //   if (a.number > b.number) {
  //     return -1;
  //   }
  //   return 0;
  // });
  // console.log(order)
  // ---------------------------------
  };