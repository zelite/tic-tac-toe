import gameStatusReducer from "./gameStatus.js";
import {defaultGameStatus} from "../store.js";
import * as actionCreators from "../actions/actionCreators.js";


it("starts the game", ()=>{
   const initialState = {currentView: "start-menu", winner:'draw'};
   const expectedFinalState = {currentView: "in-game", winner:'draw'};
   const action = actionCreators.startGame();
   const returnedFinalState = gameStatusReducer(initialState, action) ;
   expect(returnedFinalState).toEqual(expectedFinalState);
});

it("resets the game", ()=>{
   const initialState = {currentView: "in-game", winner: 'draw'};
   const expectedFinalState = defaultGameStatus;
   const action = actionCreators.resetGame();
   const returnedFinalState = gameStatusReducer(initialState, action) ;
   expect(returnedFinalState).toEqual(expectedFinalState);
});

it("ends the game", ()=>{
   const initialState = {currentView: "in-game", winner:'draw'};
   const expectedFinalState = {currentView: "game-over", winner:'draw'};
   const action = actionCreators.endGame('draw');
   const returnedFinalState = gameStatusReducer(initialState, action) ;
   expect(returnedFinalState).toEqual(expectedFinalState);
});

it("does nothing", ()=>{
   const initialState = {currentView: "in-game", winner:'draw'};
   const action = {type: "SOMETHING_ELSE"};
   const returnedFinalState = gameStatusReducer(initialState, action) ;
   expect(returnedFinalState).toBe(initialState);
});

it("ends the game with player one winning", ()=>{
   const initialState = {currentView: "in-game", winner:'draw'};
   const expectedFinalState = {currentView: "game-over", winner:'player'};
   const action = actionCreators.endGame("player");
   const returnedFinalState = gameStatusReducer(initialState, action) ;
   expect(returnedFinalState).toEqual(expectedFinalState);
});

it("ends the game with player two winning", ()=>{
   const initialState = {currentView: "in-game", winner:'draw'};
   const expectedFinalState = {currentView: "game-over", winner:'cpu'};
   const action = actionCreators.endGame("cpu");
   const returnedFinalState = gameStatusReducer(initialState, action) ;
   expect(returnedFinalState).toEqual(expectedFinalState);
});