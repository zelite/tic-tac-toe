const ROW_NUMBER = 3;
const COL_NUMBER = ROW_NUMBER;

//Data definitions

//Symbol is one of:
//"E" - field is empty
//"X" - field has an X
//"O" - field has an O
//examples
const S1 = "E";
const S2 = "X";
const S3 = "O";

//template
// function fnForSymbol(symbol){
//   switch (symbol) {
//     case "X":
//
//       break;
//     case "O":
//
//       break;
//     default:
//
//   }
// }

//Board is a list of list of Symbols
//interp. each list is the contents of a row on the board
//examples:
const B1 = [["E", "E", "E"],
            ["E", "E", "E"],
            ["E", "E", "E"]];
const B2 = [["E", "E", "E"],
            ["E", "E", "E"],
            ["E", "E", "E"]];
const B3 = [["E", "E", "E"],
            ["E", "E", "E"],
            ["E", "E", "E"]];

//template
// function fnForBoard(board){
//   for(let row=0; row<ROW_NUMBER; row++){
//     for(let col=0; col<COL_NUMBER; col++){
//       fnForSymbol(board[row][number]);
//     }
//   }
// }

//Board Number Number -> Symbol
//returns the symbol at the row and col in the boardState

export function getSymbolAtRowCol(board, row, col){
  return board[row][col];
}

export function isRowColEmpty(board, row, col){
  return getSymbolAtRowCol(board, row, col) === "E";
}

//Board Number -> list of symbols
//retunrns a list with the symbols at the given row
export function getSymbolsFromRow(board, row){
  return [...board[row]];
}

//Board Number -> list of symbols
//retunrs a list with the symbols at the given col
export function getSymbolsFromCol(board, col){
  return board.map(function(row){
    return row[col];
  });
}

//Board Number Number -> list of symbols
//returns a list of the symbols from the main diagonal if row col are in the diagonal
export function getSymbolsFromDiag(board, row, col){
  if(isInMainDiagonal(row, col)){
    return [getSymbolAtRowCol(board, 0, 0), getSymbolAtRowCol(board, 1, 1), getSymbolAtRowCol(board, 2,2)];
  }else{
    return [];
  }
}

//Board Number Number -> list of symbols
//returns a list of the symbols from the anti diagonal if row col are in the anti diagonal
export function getSymbolsFromAntiDiag(board, row, col){
  if(isInAntiDiagonal(row, col)){
    return [getSymbolAtRowCol(board, 0, 2), getSymbolAtRowCol(board, 1, 1), getSymbolAtRowCol(board, 2,0)];
  }else{
    return [];
  }
}

//Board Number Number -> Boolean
//returns true if the given coordinates are in a diagonal
export function isInDiagonal(row, col){
  return isInMainDiagonal(row, col) || isInAntiDiagonal(row, col);
}

//Board Number Number -> Boolean
//returns true if the given coordinates are in the main diagonal
export function isInMainDiagonal(row, col){
  return row === col;
}

//Board Number Number -> Boolean
//returns true if the given coordinates are in the anti diagonal
export function isInAntiDiagonal(row, col){
  return row === ROW_NUMBER-col-1;
}

//List Symbol -> Boolean
//returns true there are three of the given symbol in the list
export function thereAreThreeOfThisSymbol(listOfSymbols, symbol){
  const numberOfEqualSymbols = listOfSymbols.reduce(function(acc, next){
    let count = acc;
    if(next === symbol){
      count++;
    }
    return count;
  }, 0)
  return numberOfEqualSymbols === 3;
}


//Board Number Number -> Boolean
//returns true if the move at lastMoveRow and LastMoveCol is a winning move
export function isThereAWinner(board, lastMoveRow, lastMoveCol){
  const lastPlayedSymbol = getSymbolAtRowCol(board, lastMoveRow, lastMoveCol);
  if(lastPlayedSymbol === "E"){
    return false;
  }
  const symbolsAtRow = getSymbolsFromRow(board, lastMoveRow);
  const symbolsAtCol = getSymbolsFromCol(board, lastMoveCol);
  const symbolsAtDiag = getSymbolsFromDiag(board, lastMoveRow, lastMoveCol);
  const symbolsAtAntiDiag = getSymbolsFromAntiDiag(board, lastMoveRow, lastMoveCol);

  const possibleWinningLines = [symbolsAtRow, symbolsAtCol, symbolsAtDiag, symbolsAtAntiDiag];

  for(let i=0; i < possibleWinningLines.length; i++){
    if(thereAreThreeOfThisSymbol(possibleWinningLines[i], lastPlayedSymbol)){
      return true;
    }
  }
  return false;
}

//Board Symbol Number Number -> Board
//Returns a board with the symbol at the given coordinates in the board
export function putSymbolAtRowCol(board, symbol, row, col){
  const newBoard = board.map(function(rowList, i){
    if(row===i){
      return [...rowList.slice(0, col), symbol, ...rowList.slice(col+1)];
    }else{
    return rowList.slice(0);
  }
  })
  return newBoard;
}

export function getFreeSpots(board){
  const freeSpots = [];
  for(let row = 0; row < board.length; row++){
    for(let col = 0; col < board[row].length; col++){
      if(isRowColEmpty(board, row, col)){
        freeSpots.push([row, col]);
      }
    }
  }
  return freeSpots;
}
