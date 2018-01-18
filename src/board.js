export class Board{
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
    this._numberOfBumbs = numberOfBombs;
    this._numberOfEmptySpaces = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }
  get playerBoard(){
    return this._playerBoard;
  }
  hasNonBombEmptySpaces(){
    return this._numberOfBumbs !==this.hasNonBombEmptySpaces;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex){
  const neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const numberOfRows = this._bombBoard.length;
  const numberOfColumns = this._bombBoard[0].length;
  let numberOfBombs = 0;

  for (i=0;i<8;i++){
    neighborRowIndex = rowIndex + neighborOffsets[i][0];
    neighborColumnIndex = columnIndex + neighborOffsets[i][1];
    if (neighborRowIndex >=0 && neighborRowIndex < numberOfRows && neighborColumnIndex >=0 && neighborColumnIndex < numberOfColumns && this._bombBoard[neighborRowIndex][neighborColumnIndex] === "B"){
      numberOfBombs ++;
    }

  }

  return numberOfBombs;
  }

  flipTile (rowIndex, columnIndex){
    if(this._playerBoard[rowIndex][columnIndex]!==' '){
     console.log('This tile has already been flipped!');
     return;
   }
   this._hasNonBombEmptySpaces--;

   if(this._bombBoard[rowIndex][columnIndex]==='B'){
     console.log('Game over!');
     this._playerBoard[rowIndex][columnIndex]= 'B';
   }else{
     this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
   }
  }


  print(){
    console.log(this._playerBoard.map(row => row.join('|')).join('\n'));
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
      row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
      row.push(null);
      }
      board.push(row);
    }
    let numberOfBombsPlaced = 0;
    while(numberOfBombsPlaced < numberOfBombs){
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if(board[randomRowIndex][randomColumnIndex] !== 'B'){
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }
    return board;
  }
}
