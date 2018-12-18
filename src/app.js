import React from 'react';
import ReactDOM from 'react-dom';

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>

        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

ReactDOM.render(template, document.getElementById('app'));