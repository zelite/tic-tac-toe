import * as actionCreators from "./actionCreators.js";
import * as actionType from "./actionTypes.js";

it("creates action to change symbol to X", () => {
    expect(actionCreators.changePlayerSymbol("X")).toEqual({
        type: actionType.CHANGE_SYMBOL,
        playerSymbol: "X"
    });
});

it("creates action to change symbol to O", () => {
    expect(actionCreators.changePlayerSymbol("O")).toEqual({
        type: actionType.CHANGE_SYMBOL,
        playerSymbol: "O"
    });
});

it("creates action to change difficulty to easy", () => {
    expect(actionCreators.changeGameDifficulty("easy")).toEqual({
        type: actionType.CHANGE_DIFFICULTY,
        difficulty: "easy"
    });
});

it("creates action to change difficulty to hard", () => {
    expect(actionCreators.changeGameDifficulty("hard")).toEqual({
        type: actionType.CHANGE_DIFFICULTY,
        difficulty: "hard"
    });
});

it("creates action to start game", () => {
    expect(actionCreators.startGame()).toEqual({
        type: actionType.START_GAME
    });
})

it("creates action to reset game", () => {
    expect(actionCreators.resetGame()).toEqual({
        type: actionType.MAIN_MENU
    });
})

it("creates action to end game", () => {
    expect(actionCreators.endGame()).toEqual({
        type: actionType.GAME_OVER
    });
})