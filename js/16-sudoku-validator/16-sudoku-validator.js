function validSolution(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (
        !checkRow(board, i, j, value) ||
        !checkCol(board, i, j, value) | !validBox(board, i, j, value)
      ) {
        return false;
      }
    }
  }
  return true;
}

function checkRow(board, row, col, value) {
  for (let j = 0; j < 8; j++) {
    if (j !== col) {
      if (board[row][j] === value) {
        return false;
      }
    }
  }
  return true;
}

function checkCol(board, row, col, value) {
  for (let i = 0; i < 8; i++) {
    if (i !== row) {
      if (board[i][col] === value) {
        return false;
      }
    }
  }

  return true;
}

function validBox(board, row, col, value) {
  const startRow = row - (row % 3),
    startCol = col - (col % 3);

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (i !== row && j !== col) {
        if (board[i][j] === value) {
          return false;
        }
      }
    }
  }

  return true;
}

module.exports = validSolution;
