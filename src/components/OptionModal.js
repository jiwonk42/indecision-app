import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => ( // using props to determine isOpen as true or false
    // Modal requires 2 props: isOpen, contentLabel
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;