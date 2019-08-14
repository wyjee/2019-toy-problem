/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

// 결과글자의길이가 인풋 값의 길이일 때까지 루프를 돈다
// 처음엔 하나씩 둘씩일 때는 더해서 푸시

var powerSet = function (str) {
    //{}
    //str[i] : [str[i], str[i+1] ~ str[str.length-1]]
    //str[i+1] : [str[i+1], str[]]
    let resultObj = {};
    let result = [''];
    for(let i=0; i<str.length; i++) {
        let array = [];
        resultObj[str[i]] = [''];
        for(let j=i; j<str.length; j++) {
            // array.push(resultObj[str[i][j]]+=str[j])
        }
        array.concat(resultObj[str[i]]);
    }
    console.log(resultObj);
    // return Object.values(resultObj).sort();
}