import React, {Component} from 'react';

class GameCell extends Component{

  render(){
    const cellStyle = {
      fontSize: "2rem",
      display: "inline-block"
    };
    return(
    <div onClick={this.props.handleClickCell}
         style={cellStyle}>{this.props.symbol}</div>
  )
  }
}

class GameBoard extends Component{
    handleClickExitButton = () =>{
      this.props.goBackToStartMenu();
    }
    handleClickCell = (i, j) =>{
      console.log("You clicked on: ", [i, j]);
      this.props.makeMove(i, j);
    }
    buildBoard(){
      const board = this.props.boardState.map(function(row, i){
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
    render(){
        return(
            <div>
                <h3>This is the GameBoard</h3>
                <div>{this.buildBoard()}</div>
                <button onClick={this.handleClickExitButton}>Exit to Start Menu</button>
            </div>
            );
    }
}

GameBoard.PropTypes = {
  boardState: React.PropTypes.array.isRequired,
  goBackToStartMenu: React.PropTypes.func.isRequired};

export default GameBoard;
