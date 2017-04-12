import {createStore, combineReducers} from 'redux';
import gameSettingsReducer from './reducers/gameSettings.js';
import gameStatusReducer from './reducers/gameStatus.js';


const rootReducer = combineReducers({gameSettings: gameSettingsReducer,
                   gameStatus: gameStatusReducer});

export const defaultGameStatus = {
      currentPlayerSymbol: "X",
      turnNumber: 0,
      currentView: "start-menu", //one of "start-menu", "in-game", "game-over"
      winner: "draw", //one of "X", "O", "draw"
      board: [["E", "E", "E"],
              ["E", "E", "E"],
              ["E", "E", "E"]],
      lastMove: []
};

const store = createStore(rootReducer, {
    gameSettings:{
        playerSymbol: "X",  //one of "X", "O"
        difficulty: "easy"  //one of "easy", "hard"
    },
    gameStatus: defaultGameStatus
});


export default store;
