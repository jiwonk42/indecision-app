import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here
            </div>
        );
    }
}

const template = (
    <div>
        <h1>Title</h1>
        <Header />
        <Action />
        <Options />
    </div>
);

ReactDOM.render(template, document.getElementById('app'));