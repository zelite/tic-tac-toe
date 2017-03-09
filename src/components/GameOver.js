import React, {Component} from 'react';

class gameOver extends Component{
    getFinalMessage(winner, playerSymbol){
      if(winner === "draw"){
        return "It is a draw.";
      }else if(winner === playerSymbol){
          return "Congratulations, you won!";
      }else{
        return "Sorry, the computer won.";
      }
    }
    clickReset = ()=>{
        this.props.resetGame();
    }
    render(){
        const final_message = this.getFinalMessage(this.props.winner, this.props.playerSymbol);
        return(
            <div>
                <h3>Game Over</h3>
                <p>{final_message}</p>
            </div>
            );
    }
}

gameOver.PropTypes = {
    resetGame: React.PropTypes.func.isRequired,
    winner: React.PropTypes.oneOf(["X", "O", "draw"]).isRequired
};

export default gameOver;
