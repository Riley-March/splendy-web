import React, { useState, useEffect }  from 'react';

import ToolBar from '../../components/Toolbar/Toolbar';
import StatsItem from '../../components/StatsItem/StatsItem';

import './StatsPage.css';

const StatusPage = () => {
    const [ stats, setStats ] = useState([]);
            
    useEffect(() => {
        async function fetchData() {
            await fetch('http://localhost:5000/get_stats').then(res => {
                res.json().then(function(data) {
                    const stats = data[0].tickets.map((data, index) => {
                        if(index === 0){
                            return ({...data, active: true})
                        } else {
                            return ({...data, active: false});
                        }
                    });
                    setStats(stats);
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

    const change_stat = (clicked_stat) => {
        let stat_list = [...stats];
        stat_list = stat_list.map(stat => {
            if(stat.name === clicked_stat){
                stat.active = true;
            } else {
                stat.active = false;
            }
            return stat;
        });
        setStats(stat_list);
    }

    return (
        <React.Fragment>
            <ToolBar 
                title='Ticket Stats' 
                items={stats}
                handleClick={handleStatChange}
                has_checkbox={false}
            />
            <div className="stats-page">
                {stats.filter(ticket => ticket.active).map((ticket, index) => {
                    return <StatsItem 
                        key={index}
                        value={ticket.type}
                        daily_total={ticket.daily}
                        weekly_total={ticket.weekly}
                        all_time_total={ticket.alltime}
                    />
                })}
            </div>
        </React.Fragment>
    )
}

export default StatusPage;