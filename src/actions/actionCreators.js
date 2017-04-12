import {
    CHANGE_SYMBOL,
    CHANGE_DIFFICULTY,
    MAKE_MOVE,
    START_GAME,
    MAIN_MENU,
    GAME_OVER,
    LOADING_GAME
} from "./actionTypes.js";

function changePlayerSymbol(newSymbol) {
    return {
        type: CHANGE_SYMBOL,
        playerSymbol: newSymbol
    };
}

function changeGameDifficulty(newDifficulty) {
    return {
        type: CHANGE_DIFFICULTY,
        difficulty: newDifficulty
    };
}

function makeMove(row, col) {
    return {
        type: MAKE_MOVE,
        row: row,
        col: col
    };
}

function startGame() {
    return {
        type: START_GAME
    };
}

function resetGame() {
    return {
        type: MAIN_MENU
    };
}

function endGame(winner) {
    return {
        type: GAME_OVER,
        winner: winner
    };
}

function loadGame() {
    return {
        type: LOADING_GAME
    };
}


export {
    changePlayerSymbol,
    changeGameDifficulty,
    makeMove,
    startGame,
    resetGame,
    endGame,
    loadGame
};
