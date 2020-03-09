import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faTicketAlt } from '@fortawesome/free-solid-svg-icons'

import './Card.css';

const Card = ({ id, title, quantity, type }) => {
    return (
        <li key={id} className="card">
            <h1 className="title">
                {title} - {quantity}
            </h1>
            <h4>
                {type === 'camping' && (
                    <FontAwesomeIcon icon={faCampground} className="icon"/>
                )}
                {type === 'GA' && (
                    <FontAwesomeIcon icon={faTicketAlt} className="icon"/>
                )}
            </h4>
        </li>
    );
}

export default Card;

