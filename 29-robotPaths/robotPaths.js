/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  let count = 0;
  let newBoard = makeBoard(n);
  let path = function(newBoard, i, j) {
    //newBoard 기준으로
    //0보다 크고 n보다 작은 보드 안에서
    //i 값을 줄이거나 늘리고,
    //j 값을 줄이거나 늘리는 과정에서 몇 번 줄이거 늘릴 수 있는지 카 운트
  };
  return count;
};
