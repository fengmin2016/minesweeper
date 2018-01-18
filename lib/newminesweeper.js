const mineSweeperBoard = (row, column) => {
  const board = [];
  for (rowIndex = 0; rowIndex < row; rowIndex++) {

    const rowArray = [];
    for (columnIndex = 0; columnIndex < column; columnIndex++) {
      rowArray.push(' ');
    }
    board.push(rowArray);
  }
  return board;
};

const mineSweeperBombBoard = (row, column, bomb) => {
  const board = [];
  for (rowIndex = 0; rowIndex < row; rowIndex++) {

    const rowArray = [];
    for (columnIndex = 0; columnIndex < column; columnIndex++) {
      rowArray.push(null);
    }
    board.push(rowArray);
  }

  for (let numberBombsPlaced = 0; numberBombsPlaced < bomb; numberBombsPlaced++) {
    BombRowIndex = Math.floor(Math.random() * row);
    BombColumnIndex = Math.floor(Math.random() * column);
    board[BombRowIndex][BombColumnIndex] = 'B';
  }
  return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

//console.log(mineSweeperBoard(4,3));
//console.log(mineSweeperBombBoard(4,3,2));
printBoard(mineSweeperBombBoard(4, 3, 2));