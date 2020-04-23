import React, { useState, useEffect }  from 'react';

import ToolBar from '../../components/Toolbar/Toolbar';
import ToolbarControls from '../../components/ToolbarControls/ToolbarControls';
import StatsItem from '../../components/StatsItem/StatsItem';

import './StatsPage.css';


const StatusPage = () => {
    const [ stat_controls, setStatControls ] = useState([]);
    const [ ticket_stats, setTicketStats ] = useState([]);
    
    const controls = [
        {
            key: '1',
            value: 'All Tickets',
            is_checkbox: false,
            active: true
        },
        {
            key: '2',
            value: 'Camping',
            is_checkbox: false,
            active: false
        },
        {
            key: '3',
            value: '3-Day',
            is_checkbox: false,
            active: false
        },
        {
            key: '4',
            value: 'Friday',
            is_checkbox: false,
            active: false
        },
        {
            key: '5',
            value: 'Saturday',
            is_checkbox: false,
            active: false
        },
        {
            key: '6',
            value: 'Sunday',
            is_checkbox: false,
            active: false
        }
    ];

    const stats = [
        {
            key: '1',
            value: 'All Tickets',
            daily_total: 12312,
            weekly_total: 234,
            all_time_total: 234,
            active: true
        },
        {
            key: '2',
            value: 'Camping',
            daily_total: 123,
            weekly_total: 234,
            all_time_total: 24234,
            active: false
        },
        {
            key: '3',
            value: '3-Day',
            daily_total: 12312,
            weekly_total: 23423,
            all_time_total: 23423,
            active: false
        },
        {
            key: '4',
            value: 'Friday',
            daily_total: 2342,
            weekly_total: 2323,
            all_time_total: 123123,
            active: false
        },
        {
            key: '5',
            value: 'Saturday',
            daily_total: 12334,
            weekly_total: 5230,
            all_time_total: 12312312,
            active: false
        },
        {
            key: '6',
            value: 'Sunday',
            daily_total: 23,
            weekly_total: 5120,
            all_time_total: 112300,
            active: false
        }
    ];
        
    useEffect(() => {
        setStatControls(controls);
        setTicketStats(stats);
    }, []);

    const handleStatChange = (e) => {
        const control_name = e.currentTarget.textContent;
        let controls_copy = [...stat_controls];
        controls_copy = controls_copy.map(control => {
            if(control.value === control_name){
                control.active = true;
            } else {
                control.active = false;
            }
            return control;
        });
        setStatControls(controls_copy);
        let stat_copy = [...ticket_stats];
        stat_copy = stat_copy.map(stat => {
            if(stat.value === control_name){
                stat.active = true;
            } else {
                stat.active = false;
            }
            return stat;
        });
        setTicketStats(stat_copy);
    }

    return (
        <React.Fragment>
            <ToolBar title='Ticket Stats'>
                <ToolbarControls controls={stat_controls} handleControlClick={handleStatChange}/>
            </ToolBar>
            <div className="stats-page">
                {ticket_stats.map(stat => {   
                    if(stat.active){
                        return (
                            <StatsItem 
                                key={stat.key}
                                value={stat.value}
                                daily_total={stat.daily_total}
                                weekly_total={stat.weekly_total}
                                all_time_total={stat.all_time_total}
                            />
                        )
                    }
                })}
            </div>
        </React.Fragment>
    )
}

export default StatusPage;