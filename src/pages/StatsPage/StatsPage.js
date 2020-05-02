import React, { useState, useEffect }  from 'react';

import './StatsPage.css';

import Toolbar from '../../components/Toolbar/Toolbar';
import StatsRow from '../../components/StatsRow/StatsRow';
import Spinner from '../../components/Spinner/Spinner';

const StatsPage = () => {
    const [ tickets, setTickets ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            await fetch(`http://${process.env.REACT_APP_API_URL}/get_stats`).then(res => {
                res.json().then(function(data) {
                    const tickets = data[0].tickets.map((data, index) => {
                        if(index === 0){
                            return ({...data, active: true})
                        } else {
                            return ({...data, active: false});
                        }
                    });
                    setTickets(tickets);
                    setLoading(false);
                });
            }).catch(err => {
                console.log(err);
            });
        }
        fetchData();
    }, []);

    const handleStatChange = (e) => {
        const clicked_stat = e.currentTarget.textContent;
        change_stat(clicked_stat);
    }

    const change_stat = (click_ticket) => {
        let tickets_copy = [...tickets];
        tickets_copy = tickets_copy.map(ticket => {
            if(ticket.name === click_ticket){
                ticket.active = true;
            } else {
                ticket.active = false;
            }
            return ticket;
        });
        setTickets(tickets_copy);
    }

    return (
        <div>
            {loading ? <Spinner /> : (
                <React.Fragment>
                    <Toolbar 
                        title='Ticket Stats' 
                        items={tickets}
                        handleClick={handleStatChange}
                        has_checkbox={false}
                    />
                    <div className="stats-grid">
                        {tickets.filter(ticket => ticket.active).map((ticket, index) => {
                            return <StatsRow key={index} stats={ticket.stats}/>
                        })}
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default StatsPage;