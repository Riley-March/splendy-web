import React from 'react';

import './Button.css';

const STYLES = [
    "btn-primary",
    "btn-danger",
    "btn-primary block",
    "btn-danger block"
];

const Button = ({ label, btnStyle, onClick }) => {
    const check_button_style = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
    return (
        <button className={`btn ${check_button_style}`} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;