import React, {Component} from 'react';
import PropTypes from 'prop-types';

class gameOver extends Component {
    getFinalMessage(winner, playerSymbol) {
        if (winner === "draw") {
            return "It is a draw.";
        }
        else if (winner === playerSymbol) {
            return "Congratulations, you won!";
        }
        else {
            return "Sorry, the computer won.";
        }
    }
    clickReset = () => {
        this.props.resetGame();
    }
    render() {
        const final_message = this.getFinalMessage(this.props.winner, this.props.playerSymbol);
        return (
            <div className="alert">
                <h2>Game Over</h2>
                <p>{final_message}</p>
            </div>
        );
    }
}

gameOver.PropTypes = {
    resetGame: PropTypes.func.isRequired,
    winner: PropTypes.oneOf(["X", "O", "draw"]).isRequired
};

export default gameOver;
