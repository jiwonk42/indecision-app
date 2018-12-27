import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = { // keeps track of state and its change(s)
            options: props.options
        };
    }

    componentDidMount() {
        console.log('fetching data');
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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                // mapping through Option component; optionText is props that will be passed down to Option component
                props.options.map((option) => 
                    <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                    />
                ) 
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText); // passes an option text instead of option event object
                }}
            >remove</button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        // sets an error message by error type
        this.setState(() => ({
            error
        }));
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>    
                </form>
            </div>
        );
    }
};

IndecisionApp.defaultProps = {
    options: []
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));