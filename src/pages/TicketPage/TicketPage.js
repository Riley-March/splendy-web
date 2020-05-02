import React, { useState, useEffect } from 'react';
import addNotification from 'react-push-notification';

import './TicketPage.css';

import Card from '../../components/Card/Card';
import ToolBar from '../../components/Toolbar/Toolbar';
import Spinner from '../../components/Spinner/Spinner';
import storage from '../../modules/storage';
import colors from '../../modules/colors';

const TicketPage = () => {
    const [ tickets, setTickets ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        const ws = new WebSocket(`ws://${process.env.REACT_APP_API_URL}`);
        ws.onopen = () => {
            console.log('Connected to Web Socket');
        }
        ws.onmessage = (evt) => {
            if(evt) {
                const cached_app_settings = storage.get('app_settings');
                let tickets = JSON.parse(evt.data)[0].tickets;
                if(cached_app_settings) {
                    tickets = tickets.map((ticket, i) => 
                        ({...ticket, visible: cached_app_settings[i].is_checked})
                    );
                    
                } else {
                    tickets = tickets.map(ticket => ({...ticket, visible: true}));
                }
                setTickets(tickets);
                tickets.forEach(ticket => {
                    if(ticket.quantity > 0) {
                        addNotification({
                            title: `${ticket.quantity} x ${ticket.name} Available`,
                            subtitle: 'Splendy',
                            theme: 'darkblue',
                            native: true
                        });
                    }
                });
                setLoading(false);
            }
        }
        return () => { ws.close(); }
    }, []);

    const handleTicketFilter = (e) => {
        const clicked_ticket = e.currentTarget.value;
        update_tickets(clicked_ticket);
        update_app_setting_storage(clicked_ticket);
    }

    const update_tickets = (clicked_ticket) => {
        let filtered_tickets = [...tickets];
        filtered_tickets = filtered_tickets.map(ticket => {
            if(ticket.name === clicked_ticket){
                ticket.visible = !ticket.visible;
            }
            return ticket;
        });
        setTickets(filtered_tickets);
    }

    const update_app_setting_storage = (clicked_ticket) => {
        let app_settings = storage.get('app_settings');
        app_settings = app_settings.map(item => {
            if(item.title === clicked_ticket){
                item.is_checked = !item.is_checked;
            }
            return item;
        });
        storage.set('app_settings', app_settings);
    }
    
    return(
        <div>
            {loading ? <Spinner /> : (
                <React.Fragment>
                    <ToolBar 
                        title='Toggle Visible Tickets' 
                        items={tickets}
                        handleClick={handleTicketFilter}
                        has_checkbox={true}
                    />
                    <div className="ticket-page">
                        <div className="card-grid">
                            {tickets.filter(ticket => ticket.visible).map((ticket, index) => {
                                return (
                                    <Card
                                        key={index}
                                        title={ticket.name}
                                        sub_title='Splendour In The Grass'
                                        quantity={ticket.quantity}
                                        color={colors.get_color(index)}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default TicketPage;