import React, {Component} from 'react';



//Radio
class SelectOne extends Component {
    render() {
        const isFirstChoiceSelected = this.props.optionSelected === this.props.firstChoice;
        return (
            <div>
                <h3>{this.props.title}</h3>
                <label> {this.props.firstChoice}
                    <input name={this.props.name}
                        value={this.props.firstChoice} type="radio"
                        checked={isFirstChoiceSelected} onChange={this.props.handleInputChange}/>
                </label>
                <label> {this.props.secondChoice}
                <input name={this.props.name}
                    value={this.props.secondChoice} type="radio"
                    checked={!isFirstChoiceSelected} onChange={this.props.handleInputChange}/>
                </label>
            </div>
        );
    }
}

class SelectSymbol extends Component {
    render() {
        return (
            <SelectOne firstChoice="X" secondChoice="O" name="symbolChoice"
            optionSelected={this.props.optionSelected}
            handleInputChange={this.props.handleInputChange}
            title="Choose Symbol"/>
        );
    }
}

class SelectDifficulty extends Component {
    render() {
        return (
            <SelectOne firstChoice="easy" secondChoice="hard" name="difficultyChoice"
            optionSelected={this.props.optionSelected}
            handleInputChange={this.props.handleInputChange}
            title="Choose Difficulty"/>
        );
    }
}

class StartMenu extends Component{
    handleInputChange = (event) => {
        const whatIsChanging = event.target.name;
        const dispatchFunctions = {
            difficultyChoice: this.props.changeDifficulty,
            symbolChoice: this.props.changeSymbol
        };
        dispatchFunctions[whatIsChanging](event.target.value);
    }
    handleClickStart = ()=>{
        this.props.startGame();
    }
    render(){
        return (
        <div className="start-menu">
            <SelectSymbol optionSelected={this.props.symbolChoice}
                        handleInputChange={this.handleInputChange} />
            <SelectDifficulty optionSelected={this.props.difficultyChoice}
                    handleInputChange={this.handleInputChange} />
            <button onClick={this.handleClickStart}>Start Game!</button>

            <div><em>First Prototype. The computer only plays randomly. There is no hard mode yet.</em></div>
        </div>
        );
    }
}

StartMenu.PropTypes = {changeDifficulty: React.PropTypes.func.isRequired,
                       changeSymbol: React.PropTypes.func.isRequired,
                       startGame: React.PropTypes.func.isRequired,
                       symbolChoice: React.PropTypes.oneOf(["X", "O"]).isRequired,
                       difficultyChoice: React.PropTypes.oneOf(["easy", "hard"]).isRequired
};


export default StartMenu;
