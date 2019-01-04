import React from 'react';
import Modal from 'react-modal';

const OptionModal = () => (
    // Modal requires 2 props: isOpen, contentLabel
    <Modal
        isOpen={true}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
    </Modal>
);

export default OptionModal;