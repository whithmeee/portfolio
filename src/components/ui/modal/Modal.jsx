import React from 'react';
import './Modal.css';

const Modal = ({ children, handleCLickOpen }) => {
    return (
        <div onClick={handleCLickOpen} className="modal">
            <div onClick={(e) => e.stopPropagation()} className="modal__content">
                {children}
            </div>
        </div>
    );
};

export default Modal;
