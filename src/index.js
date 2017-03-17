import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js'
import {Provider} from 'react-redux'
import App from './App';
import './index.css';
import {easyPlayerNextMove} from "./aiPlayer.js";
import {makeMove} from "./actions/actionCreators.js";

store.subscribe(function(){
  const currentGameState = store.getState();
  const currentPlayerSymbol = currentGameState.gameStatus.currentPlayerSymbol;
  const playerSymbol = currentGameState.gameSettings.playerSymbol;
  const currentBoard = currentGameState.gameStatus.board;
  const turnNumber = currentGameState.gameStatus.turnNumber
  //debugger;
  if(currentPlayerSymbol !== playerSymbol && turnNumber < 9){
    const aiMove = easyPlayerNextMove(currentBoard);
    console.log(aiMove);
    store.dispatch(makeMove(aiMove[0], aiMove[1]));
  }
})



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
