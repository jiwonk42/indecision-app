import React from 'react';

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

export { Option as default };