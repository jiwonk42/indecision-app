import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return <p>This is from Header</p>;
    }
}

const template = (
    <div>
        <h1>Title</h1>
        <Header />
    </div>
);

ReactDOM.render(template, document.getElementById('app'));