import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = { // keeps track of state and its change(s)
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

    handleDeleteOption = (optionToRemove) => { // optionToRemove is an event object
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option) // removes individual option when clicked}))
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption = (option) => {
        // error messages
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        // no errors
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }

    componentDidMount() {
        // if json data is valid
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json); // objectify stringified options object for setting current state
            // DOES NOT LOSE DATA even after the page refreshes
            if (options) {
                this.setState(() => ({ options }));
            }     
        } catch (e) { // if the json data is invalid
            // does nothing 
        } 
    }

    componentDidUpdate(prevProps, prevState) {
        // only when new data is added
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options); // converts an object into a string
            localStorage.setItem('options', json); // sets stringified object to options
        }  
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions} 
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                        <OptionModal 
                            selectedOption={this.state.selectedOption}
                            handleClearSelectedOption={this.handleClearSelectedOption}
                        />
                    </div>    
                </div>
            </div>
        );
    }
}