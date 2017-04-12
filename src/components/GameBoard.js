import React, {Component} from 'react';
import PropTypes from 'prop-types';

function GameCell(props) {
  const cellStyle = {
    fontSize: "2rem",
    display: "inline-block"
  };
  return (
    <div onClick={props.handleClickCell}
       style={cellStyle}>{props.symbol}</div>
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
        <h3>This is the GameBoard</h3>
        <div>{this.buildBoard()}</div>
        <button onClick={this.handleClickExitButton}>Exit to Start Menu</button>
      </div>
    );
  }
}

GameBoard.PropTypes = {
  boardState: PropTypes.array.isRequired,
  goBackToStartMenu: PropTypes.func.isRequired
};

export default GameBoard;
