import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option</p>}
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

export default Options;