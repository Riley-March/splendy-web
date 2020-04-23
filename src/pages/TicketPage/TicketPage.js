import React, { useState, useEffect } from 'react';

import './TicketPage.css';

import Card from '../../components/Card/Card';
import ToolBar from '../../components/Toolbar/Toolbar';
import ToolbarControls from '../../components/ToolbarControls/ToolbarControls';

const TicketPage = () => {
    const [ ticket_settings, setTicketSettings ] = useState([]);
    const [ event, setEvent ] = useState([]);
    const [ connected, setConnected ] = useState(false);
    
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5000');
        ws.onopen = () => {
            console.log('Connected to Web Socket');
        }
        ws.onmessage = (evt) => {
            //Recieves data from the server every 30 seconds
            console.log('message received');
            
            if(evt) {
                //Checks local storage for app settings
                const ticket_settings_storage = get_storage('ticket_settings');
                //Parses the data as a JSON
                const splendour = JSON.parse(evt.data)[0];
                //If app settings exist that merge the app settings with the data json
                if(ticket_settings_storage) {
                    splendour.tickets = splendour.tickets.map((ticket, i) => 
                        ({...ticket, visible: ticket_settings_storage[i].isChecked})
                    );
                //Else add the visible field to the JSON data 
                } else {
                    splendour.tickets = splendour.tickets.map(ticket => ({...ticket, visible: true}));
                }
                //Create the ticket settings based on the JSOn data
                const ticket_settings = splendour.tickets.map((ticket, index) => {
                    return {
                        id: index,
                        value: ticket.name,
                        isChecked: ticket.visible,
                        is_checkbox: true
                    }
                });
                //set the ticket settings to the state
                setTicketSettings(ticket_settings);
                //set the event data to state
                setEvent(splendour);
                //set connected state variable to true
                setConnected(true);                
            }
        }
        return () => {
            ws.close();
        }
    }, []);
    
    //callback for when you click a checkbox in the settings toolbar
    const handleTicketFilter = (e) => {
        //name of the checkbox
        const ticket_type = e.currentTarget.value;
        //create a copy of the current event loaded
        const filtered_event = {...event};
        //matches the checkbox tick with a ticket in the list and hides it
        filtered_event.tickets = event.tickets.map(ticket => {
            if(ticket.name === ticket_type){
                ticket.visible = !ticket.visible;
            }
            return ticket;
        });
        //set the updated event as the new version in state and re render the view
        setEvent(filtered_event);
        //create a copy of the ticket settings
        const persitant_ticket_settings = [...ticket_settings];
        //match checkbox tick with a setting in the list and mark it as check or not checked
        persitant_ticket_settings.map(setting => {
            if(setting.value === ticket_type){
                setting.isChecked = !setting.isChecked;
            }
            return setting;
        });
        //save the new settings into local storage
        set_storage('ticket_settings', persitant_ticket_settings);
        //save the updated ticket settings into the state
        setTicketSettings(persitant_ticket_settings);
        
    }

    const handleResetSettings = () => {
        //delete the local storage
        delete_storage('ticket_settings');
        //create a copy of the loaded event
        const reset_event = {...event};
        //set every ticket in the event to be visible
        reset_event.tickets.map(ticket => {
            ticket.visible = true;
            return ticket;
        });
        //save the updated event into the state
        setEvent(reset_event);
        //create a copy of the ticket settings
        const reset_ticket_settings = [...ticket_settings];
        //set the isChecked property to every ticket setting
        reset_ticket_settings.map(setting => {
            setting.isChecked = true;
            setting.id = Math.random(0, 1000);
            return setting;
        });
        //save the updated settings into the state
        setTicketSettings(reset_ticket_settings);
        
    }

    const get_storage = (name) => {
        const stored_data = localStorage.getItem(name);
        if(stored_data){
            return JSON.parse(stored_data);
        }   
    }

    const set_storage = (name, object) => {
        localStorage.setItem(name, JSON.stringify(object));
    }

    const delete_storage = (name) => {
        localStorage.removeItem(name);
    }

    return(
        <React.Fragment>
            <ToolBar title='Toggle Tickets'>
                <ToolbarControls
                    controls={ticket_settings}
                    has_checkbox={true}
                    handleControlClick={handleTicketFilter}
                />
            </ToolBar>
            <div className="ticket-page">
                <div className="card-grid">
                    {connected && event.tickets.map((ticket, index) => {
                        if(ticket.visible){
                            return (
                                <Card
                                    key={index}
                                    title={ticket.name}
                                    sub_title='Splendour In The Grass'
                                    type={ticket.type}
                                    quantity={ticket.quantity}
                                    card_style={index}
                                />
                            )
                        }
                    })}
                </div>
        </div>
        </React.Fragment>
    )
}

export default TicketPage;