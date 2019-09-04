/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  let result = 0;
  let isSplit = romanNumeral.split("");
  //하나씩 돌면서 DIGIT_VALUES 에 있는지 확인, 없으면 null
  //있으면 다음 인덱스 숫자를 확인,
  //다음 인덱스 숫자가 앞 숫자보다 작으면 결과값에 더하고
  //다음 인덱스 숫자가 앞 숫자보다 크면 그 다음 숫자를 이 숫자에 뺀 다음에 더하기

  for (let i = 0; i < isSplit.length; i++) {
    console.log(isSplit[i], DIGIT_VALUES[isSplit[i]]);
    if (DIGIT_VALUES[isSplit[i]] === undefined) return null;
    else {
      if (DIGIT_VALUES[isSplit[i]] < DIGIT_VALUES[isSplit[i + 1]]) {
        result =
          result + DIGIT_VALUES[isSplit[i + 1]] - DIGIT_VALUES[isSplit[i]];
        i += 1;
      } else {
        result += DIGIT_VALUES[isSplit[i]];
      }
    }
  }
  return result;
};
