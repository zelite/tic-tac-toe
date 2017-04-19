import React, {Component} from 'react';
import PropTypes from 'prop-types';

function GameCell(props) {
  const cellStyle = {
    width: "100px",
    height: "100px",
    lineHeight: "100px",
    fontSize: "100px",
    border: "solid black 1px",
    display: "inline-block",
    verticalAlign: "bottom"
  };
  let symbol = props.symbol;
  if(symbol === "E"){
    symbol = ""
  }
  return (
    <div className="game-cell" onClick={props.handleClickCell}
       style={cellStyle}>{symbol}</div>
  );
}

class GameBoard extends Component {
  handleClickExitButton = () => {
    this.props.goBackToStartMenu();
  }
  handleClickCell = (i, j) => {
    this.props.makeMove(i, j);
  }
  buildBoard() {
    const board = this.props.boardState.map(function(row, i) {
      return (
        <div key={i}>
              {row.map((cell, j)=> <GameCell  key={[i, j].join(",")}
                                      symbol={cell}
                                      handleClickCell={this.handleClickCell.bind(null, i, j)}
                                    />, this)}
          </div>
      );
    }, this);
    return board;
  }
  render() {
    return (
      <div>
        <div className="game-board">{this.buildBoard()}</div>
        <button className="large primary" onClick={this.handleClickExitButton}>Exit to Start Menu</button>
      </div>
    );
  }
}

GameBoard.PropTypes = {
  boardState: PropTypes.array.isRequired,
  goBackToStartMenu: PropTypes.func.isRequired
};

export default GameBoard;
