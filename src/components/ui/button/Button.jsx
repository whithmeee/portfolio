import React from 'react';
import './Button.css';

const Button = ({ children, handleCLickOpen }) => {
    return (
        <button onClick={handleCLickOpen} className="button">
            {children}
        </button>
    );
};

export default Button;
