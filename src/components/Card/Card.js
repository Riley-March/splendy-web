import React from 'react';

import './Card.css';

import Button from '../Button/Button';

const STYLES = [
    "card-blue",
    "card-yellow",
    "card-pink",
    "card-green"
];

const Card = ({ id, title, sub_title, quantity, card_style, button_handler }) => {
    const check_button_style = STYLES[card_style];
    
    return (
        <li key={id} className={`card ${check_button_style}`}>
            <div className="card-header">
                <h1 className="sub-title">
                    {sub_title}
                </h1>
                <h1 className="title">
                    {title}
                </h1>
            </div>
            <div className="card-body">
                <h1 className="quantity">
                    {quantity}
                </h1>
                {button_handler &&
                    <Button
                        label='Buy Now' 
                        btnStyle='btn-primary'
                        onClick={button_handler}
                    />
                }

            </div>
        </li>
    );
}

export default Card;

