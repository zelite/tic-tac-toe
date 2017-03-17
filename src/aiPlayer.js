import * as board from "./board.js";

function getRandomIntInclusive(min, max) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function easyPlayerNextMove(boardState){
    const freeSpots = board.getFreeSpots(boardState);
    const theChosenMove = freeSpots[getRandomIntInclusive(0, freeSpots.length-1)];
    return theChosenMove;
}
