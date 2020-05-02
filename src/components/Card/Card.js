import React from 'react';

import './Card.css';

const Card = ({ title, sub_title, quantity, color }) => {
    return (
        <div data-testid="card" className={`card card-${color}`}>
            <h1 data-testid="title" className="title">
                {title}
            </h1>
            <h1 data-testid="sub-title" className="sub-title">
                {sub_title}
            </h1>
            <h1 data-testid="quantity" className="quantity">
                {quantity}
            </h1>
        </div>
    );
}

export default Card;

