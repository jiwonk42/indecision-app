import React from 'react';
import ReactDOM from 'react-dom';

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// updates options once form is submitted
const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

// removes all options
const onRemoveAll = () => {
    app.options = [];
    render();
};

// chooses an option randomly
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); // random number between 0 and number of elements in options array minus one
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
    // displays options and allows user to add and remove options
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => 
                        <li key={option}>{option}</li>
                    )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

// renders template component
render();