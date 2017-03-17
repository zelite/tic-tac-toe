import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import StartMenu from './components/StartMenu.js';
import GameBoard from "./components/GameBoard.js";
import GameOver from "./components/GameOver.js";
import './App.css';
import {changeGameDifficulty, changePlayerSymbol, makeMove, startGame, resetGame} from "./actions/actionCreators.js";





function mapStartMenuStateToProps(state){
  return {symbolChoice: state.gameSettings.playerSymbol,
          difficultyChoice: state.gameSettings.difficulty
  };
}

function mapStartMenuDispatchToProps(dispatch){
  return {
    changeDifficulty: (newDifficulty) => dispatch(changeGameDifficulty(newDifficulty)),
    changeSymbol:  (newSymbol) => dispatch(changePlayerSymbol(newSymbol)),
    startGame: () => dispatch(startGame())
  };
}

const StartMenuConnected = connect(mapStartMenuStateToProps, mapStartMenuDispatchToProps)(StartMenu);

function mapGameBoardStateToProps(state){
  return {
    boardState: state.gameStatus.board
  }
}

function mapGameBoardDispatchToProps(dispatch){
  return {
    goBackToStartMenu: () => dispatch(resetGame()),
    makeMove: (row, col) => dispatch(makeMove(row, col))

  }
}

const GameBoardConnected = connect(mapGameBoardStateToProps, mapGameBoardDispatchToProps)(GameBoard);



function mapGameOverStateToProps(state){
  return {winner: state.gameStatus.winner,
    playerSymbol: state.gameSettings.playerSymbol
  };
}

function mapGameOverDispatchToProps(dispatch){
  return {
    resetGame: (newDifficulty) => dispatch(resetGame(newDifficulty)),
  };
}


const GameOverConnected = connect(mapGameOverStateToProps, mapGameOverDispatchToProps)(GameOver);

class App extends Component {
  chooseView(currentView){
    switch(currentView){
      case "in-game":
        return <GameBoardConnected />;
      case "game-over":
        return (
        <div>
         <GameOverConnected />
         <GameBoardConnected />
        </div>
      );
      default:
        return <StartMenuConnected />;
    }
  }
  render() {
    const currentView = this.chooseView(this.props.currentView);
    return (
        <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tic Tac Toe</h2>
        </div>
        {currentView}
        </div>
    );
  }
}

const AppConnected = connect(function(state){return {currentView: state.gameStatus.currentView}}, null)(App);
export default AppConnected;
