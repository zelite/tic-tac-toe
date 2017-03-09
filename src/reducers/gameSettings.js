import {CHANGE_SYMBOL, CHANGE_DIFFICULTY} from "../actions/actionTypes.js";

function gameSettingsReducer(previousState = {}, action){
    switch(action.type){
        case CHANGE_SYMBOL:
            return {...previousState, playerSymbol: action.playerSymbol};
        case CHANGE_DIFFICULTY:
            return {...previousState, difficulty: action.difficulty};
        default:
            return previousState;
    }
}

export default gameSettingsReducer;