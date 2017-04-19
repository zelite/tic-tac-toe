import {MAKE_MOVE, START_GAME, MAIN_MENU, GAME_OVER, LOADING_GAME} from "../actions/actionTypes.js";
import {putSymbolAtRowCol, isRowColEmpty, isThereAWinner} from "../board.js";
import {defaultGameStatus} from "../store.js";

function switchSymbol(symbol) {
  if (symbol === "X") {
    return "O";
  }
  else {
    return "X";
  }
}

function tryToPutSymbolAtRowCol(previousState = {}, row, col) {
  const board = previousState.board;
  const currentSymbol = previousState.currentPlayerSymbol;
  if (isRowColEmpty(board, row, col)) {
    const nextBoard = putSymbolAtRowCol(board, currentSymbol, row, col);
    let nextView = previousState.currentView;
    const movesSoFar = previousState.turnNumber;
    let winner = previousState.winner;
    if (isThereAWinner(nextBoard, row, col)) {
      winner = currentSymbol;
      nextView = "game-over";
    }
    else if (movesSoFar === 8) {
      nextView = "game-over";
    }
    return {
      board: nextBoard,
      turnNumber: previousState.turnNumber + 1,
      currentPlayerSymbol: switchSymbol(currentSymbol),
      lastMove: [row, col],
      winner: winner,
      currentView: nextView
    };
  }
  else {
    return previousState;
  }
}

function gameStatusReducer(previousState = {}, action) {
  switch (action.type) {
    case START_GAME:
      return {...previousState,
        currentView: "in-game"
      };
    case MAIN_MENU:
      return defaultGameStatus;
    case GAME_OVER:
      return {...previousState,
        currentView: "game-over",
        winner: action.winner
      };
    case MAKE_MOVE:
      if(previousState.currentView === "in-game"){
        return {...previousState,
          ...tryToPutSymbolAtRowCol(previousState, action.row, action.col)
        };
      }else{
        return previousState;
      }   
    case LOADING_GAME:
      return {
        ...previousState,
        currentView: "loading"
      };
    default:
      return previousState;
  }
}

export default gameStatusReducer;
