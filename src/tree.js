import * as board from "./board.js";

export default class Node{
  constructor(board, move){
    this.parent = null;
    this.board = board;
    this.move = move;
    this.children = []
    this.score = 0;
  }

  addChild(child){
    child.parent = this;
    this.children.push(child);
  }
}

export function createChildrenBoards(boardNode, nextPlayerSymbol){
  const freespots = board.getFreeSpots(boardNode.board);

  if(boardNode.move && board.isThereAWinner(boardNode.board, boardNode.move[0], boardNode.move[1])){
    if(nextPlayerSymbol === "X"){
      boardNode.score = - 10;
    }else{
      boardNode.score = 10;
    }
    return;
  }

  for(let i = 0; i < freespots.length; i++){
    let newBoard = board.putSymbolAtRowCol(boardNode.board, nextPlayerSymbol, freespots[i][0], freespots[i][1]);
    //console.log(newBoard);
    let newNode = new Node(newBoard, [...freespots[i]]);
    boardNode.addChild(newNode)
    //console.log(newNode)
    createChildrenBoards(newNode, nextPlayerSymbol === "X"? "O":"X");
  }

  if(boardNode.children.length > 0){
  if(nextPlayerSymbol === "X"){
    boardNode.score = boardNode.children.reduce(function(acc, next){
      return Math.max(next.score, acc);
    }, -200)
  }else{
    boardNode.score = boardNode.children.reduce(function(acc, next){
      return Math.min(next.score, acc);
    }, 200)
  }
  }
}
