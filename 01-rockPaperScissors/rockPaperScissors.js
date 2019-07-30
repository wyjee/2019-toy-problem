/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function () {

  if([...arguments][0]<1) return 'There\'s no play'
  
  if([...arguments].length===0) {
        let result = [];
        let choices = ['rock', 'scisscors', 'paper'];
        for (let i = 0; i < choices.length; i++) {
          for (let j = 0; j < choices.length; j++) {
            for (let k = 0; k < choices.length; k++) {
              let oneRound = [];
              oneRound.push(choices[i], choices[j], choices[k]);
              result.push(oneRound);
            }
          }
        }
        return result;
  }

  return function() {
        let count = [...arguments][0];
        let innerPlay = function() {
                let result = [];
                let choices = ['rock', 'scisscors', 'paper'];
                for (let i = 0; i < choices.length; i++) {
                        let oneRound = [];
                        oneRound.push(choices[i], choices[j], choices[k]);
                        result.push(oneRound);
                        count--;
                        if(count) {
                                innerPlay()
                        }
                        else {
                                return result;
                        }
                }
        }

  }
};

  //매개변수가 없는 경우   3판 new Array(3)
  //let rock=3; let scissor=3; let paper=3
