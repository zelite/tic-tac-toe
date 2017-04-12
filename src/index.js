import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import {easyPlayerNextMove, hardPlayer} from "./aiPlayer.js";
import {makeMove, startGame} from "./actions/actionCreators.js";


let newhardPlayer;

store.subscribe(function(){
  const currentGameState = store.getState();
  const currentPlayerSymbol = currentGameState.gameStatus.currentPlayerSymbol;
  const playerSymbol = currentGameState.gameSettings.playerSymbol;
  const currentBoard = currentGameState.gameStatus.board;
  const currentView = currentGameState.gameStatus.currentView;
  
  if(currentView === "loading"){
    if(currentGameState.gameSettings.difficulty === "hard"){
      setTimeout(function() {newhardPlayer = new hardPlayer(); store.dispatch(startGame())}, 10);
    }else{
      store.dispatch(startGame());
    }
    return;
  }
  if(currentPlayerSymbol !== playerSymbol && currentView === "in-game"){
    let aiMove;
    if(currentGameState.gameSettings.difficulty === "easy"){
      aiMove = easyPlayerNextMove(currentBoard);
    }else{
      aiMove = newhardPlayer.NextMove(currentGameState.gameStatus, playerSymbol);
    }
    store.dispatch(makeMove(aiMove[0], aiMove[1]));
  }
});



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
