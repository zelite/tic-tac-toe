import * as board from "./board.js";
import Node, {createChildrenBoards} from "./tree.js";

function getRandomIntInclusive(min, max) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function easyPlayerNextMove(boardState) {
  const freeSpots = board.getFreeSpots(boardState);
  const theChosenMove = freeSpots[getRandomIntInclusive(0, freeSpots.length - 1)];
  return theChosenMove;
}


export class hardPlayer {
  constructor() {
    const board = [
      ["E", "E", "E"],
      ["E", "E", "E"],
      ["E", "E", "E"]
    ];
    this.tree = new Node(board, null);
    this.ingame = false;
    createChildrenBoards(this.tree, "X");
  }
  NextMove(gameStatus, playerSymbol) {
    this.ingame = true;
    if (gameStatus.lastMove) {
      for (let i = 0; i < this.tree.children.length; i++) {
        if (gameStatus.lastMove[0] === this.tree.children[i].move[0] &&
          gameStatus.lastMove[1] === this.tree.children[i].move[1]) {
          this.tree = this.tree.children[i];
          break;
        }
      }
    }
    if (playerSymbol === "X") {
      this.minimizeTree();
    }
    else {
      this.maximizeTree();
    }
    return this.tree.move;
  }
  minimizeTree() {
    let min = this.tree.children[0];
    for (let i = 1; i < this.tree.children.length; i++) {
      let thisChild = this.tree.children[i];
      if (min.score > thisChild.score) {
        min = thisChild;
      }
    }
    this.tree = min;
  }

  maximizeTree() {
    let max = this.tree.children[0];
    for (let i = 1; i < this.tree.children.length; i++) {
      let thisChild = this.tree.children[i];
      if (max.score < thisChild.score) {
        max = thisChild;
      }
    }
    this.tree = max;
  }
}
