import React, {Component} from 'react';
import PropTypes from 'prop-types';

function SelectOne(props) {
    const isFirstChoiceSelected = props.optionSelected === props.firstChoice;
    return (
        <div>
          <h3>{props.title}</h3>
          <div className="input-group">
            <input tabIndex="0" name={props.name}
                    id={props.firstChoice}
                    value={props.firstChoice} type="radio"
                    checked={isFirstChoiceSelected} onChange={props.handleInputChange}/>
            <label htmlFor={props.firstChoice}>{props.firstChoice}</label>

            <input tabIndex="0" name={props.name}
                id={props.secondChoice}
                value={props.secondChoice} type="radio"
                checked={!isFirstChoiceSelected} onChange={props.handleInputChange}/>
            <label htmlFor={props.secondChoice}>{props.secondChoice}</label>
          </div>
        </div>
    );
}

function SelectSymbol(props) {
    return (
        <SelectOne firstChoice="X" secondChoice="O" name="symbolChoice"
        optionSelected={props.optionSelected}
        handleInputChange={props.handleInputChange}
        title="Choose Symbol"/>
    );
}

function SelectDifficulty(props) {
    return (
        <SelectOne firstChoice="easy" secondChoice="hard" name="difficultyChoice"
        optionSelected={props.optionSelected}
        handleInputChange={props.handleInputChange}
        title="Choose Difficulty"/>
    );
}

class StartMenu extends Component {
    handleInputChange = (event) => {
        const whatIsChanging = event.target.name;
        const dispatchFunctions = {
            difficultyChoice: this.props.changeDifficulty,
            symbolChoice: this.props.changeSymbol
        };
        dispatchFunctions[whatIsChanging](event.target.value);
    }
    handleClickStart = () => {
        this.props.loadGame();
    }
    render() {
        return (
            <div className="start-menu">
            <SelectSymbol optionSelected={this.props.symbolChoice}
                        handleInputChange={this.handleInputChange} />
            <SelectDifficulty optionSelected={this.props.difficultyChoice}
                    handleInputChange={this.handleInputChange} />
            <button className="large primary" onClick={this.handleClickStart}>Start Game!</button>
        </div>
        );
    }
}

StartMenu.PropTypes = {
    changeDifficulty: PropTypes.func.isRequired,
    changeSymbol: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    symbolChoice: PropTypes.oneOf(["X", "O"]).isRequired,
    difficultyChoice: PropTypes.oneOf(["easy", "hard"]).isRequired
};


export default StartMenu;
