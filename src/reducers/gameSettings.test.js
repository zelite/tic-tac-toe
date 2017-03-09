import gameSettingsReducer from "./gameSettings.js";
import * as actionCreators from "../actions/actionCreators.js";

it("changes the symbol", ()=>{
   const initialState = {playerSymbol: "X"};
   const expectedFinalState = {playerSymbol: "O"};
   const action = actionCreators.changePlayerSymbol("O");
   const returnedFinalState = gameSettingsReducer(initialState, action) ;
   expect(returnedFinalState).toEqual(expectedFinalState);
});

it("changes the difficulty", ()=>{
   const initialState = {difficulty: "easy"};
   const expectedFinalState = {difficulty: "hard"};
   const action = actionCreators.changeGameDifficulty("hard");
   const returnedFinalState = gameSettingsReducer(initialState, action) ;
   expect(returnedFinalState).toEqual(expectedFinalState);
});

it("does nothing", ()=>{
   const initialState = {playerSymbol: "X",
                         difficulty: "easy"};
   const action = {type: "SOMETHING_ELSE"};
   const returnedFinalState = gameSettingsReducer(initialState, action) ;
   expect(returnedFinalState).toBe(initialState);
});