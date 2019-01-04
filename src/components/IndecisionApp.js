import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = { // keeps track of state and its change(s)
            options: []
        };
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

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove) { // optionToRemove is an event object
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option) // removes individual option when clicked}))
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
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

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}