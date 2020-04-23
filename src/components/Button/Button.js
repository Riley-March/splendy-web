import React from 'react';

import './Button.css';

const STYLES = [
    "btn-primary",
    "btn-danger",
    "btn-primary block",
    "btn-danger block"
];

const Button = ({ label, btn_style, on_click }) => {
    const check_button_style = STYLES.includes(btn_style) ? btn_style : STYLES[0];
    return (
        <button className={`btn ${check_button_style}`} onClick={on_click}>
            {label}
        </button>
    )
}

export default Button;