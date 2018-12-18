import React from 'react';
import ReactDOM from 'react-dom';

// if statements
// ternary operators
// logical && operator

// only render the subtitle (and p tag) if subtitle exist - logical && operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}

        <p>{app.options.length > 0 ? 'Here are options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

ReactDOM.render(template, document.getElementById('app'));