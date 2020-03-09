import React, { useState, useEffect } from 'react';
import Moment from 'moment';

import './TicketPage.css';

import Card from '../../components/Card/Card';

const TicketPage = () => {
    const [ event, setEvent ] = useState([]);
    const [ connected, setConnected ] = useState(false);
    
    Moment.locale('en', {
        relativeTime: {
            past: '%s Ago',
            ss: '%ss',
            mm: '%dm',
            hh: '%dh',
            dd: '%dd',
            MM: '%dM',
            yy: '%dY'
        }
    });

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5000');
        ws.onopen = () => {
            console.log('Connected to Web Socket');
        }
        ws.onmessage = (evt) => {
            if(evt) {
                const event = JSON.parse(evt.data);
                console.log(event)
                setEvent(event);
                setConnected(true);
            }
        }
        return () => {
            ws.close();
        }
    }, []);

    return(
        <div className="cards">
            <h1>
                Last Checked: {Moment(event.timestamp).fromNow()}
            </h1>
            {connected && event.tickets.map((ticket, index) => {
                return (

                    <Card
                        key={index}
                        title={ticket.name}
                        type={ticket.type}
                        quantity={ticket.quantity}
                    />
                )
            })}
        </div>
    )
}

export default TicketPage;