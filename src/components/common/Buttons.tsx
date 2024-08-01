import React from 'react';
import '../../index.css';
import { ButtonProps } from '../../types/ButtonProps';



const Button: React.FC<ButtonProps> = ({ theme, children, onClick }) => {
    const buttonClass = theme === 'light' ? 'button-light' : 'button-dark';

    return (
        <button
            onClick={onClick}
            className={buttonClass}
        >
            {children}
        </button>
    );
};

export default Button;
