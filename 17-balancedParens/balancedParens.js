/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){
    let acc = [];
    let store = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for (let i=0; i<input.length; i++) {
        if (
            input[i] === "(" ||
            input[i] === "{" ||
            input[i] === "["
        ) {
            acc.push(input[i]);
        }
        if (input[i]===')' || input[i]==='}' || input[i]===']') {
            let last = acc[acc.length-1]
            console.log("acc", acc);
            console.log('last index', acc.length-1)
            console.log('last in acc', last)
            if(store[last] === input[i]) {
                acc.pop();
            }
            else {
                return false;
            }
        }
    }
    return acc.length===0;
};


// var balancedParens = function(input) {
//   let small = 0;
//   let middle = 0;
//   let big = 0;

//   for (let i = 0; i < input.length; i++) {
//     // ( 이면 ++, ) 이면 -- * 3
//     // count 마이너스이면 return false;
//     // 최종 카운트가 0 이 아닐 때 return false;
//     if (input[i] === "(") {
//       small++;
//     }
//     if (input[i] === "{") {
//       middle++;
//     }
//     if (input[i] === "[") {
//       big++;
//     }
//     if (input[i] === ")") {
//       if (small === 0) return false;
//       small--;
//     }
//     if (input[i] === "}") {
//       if (middle === 0) return false;
//       middle--;
//     }
//     if (input[i] === "]") {
//       if (big === 0) return false;
//       big--;
//     }
//   }
//   if (small !== 0 || middle !== 0 || big !== 0) return false;
//   return true;
// };
