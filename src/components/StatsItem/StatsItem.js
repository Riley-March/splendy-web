import React from 'react';

import Card from '../../components/Card/Card';

import './StatsItem.css';

const StatsItem = ({value, daily_total, weekly_total, all_time_total}) => {
    return (        
        <div className="stats-row">
            <Card
                title='Daily'
                quantity={daily_total}
                card_style='0'
            />
            <Card
                title='Weekly'
                quantity={weekly_total}
                card_style='2'
            />
            <Card
                title='All Time'
                quantity={all_time_total}
                card_style='4'
            />
        </div>
    )
}

export default StatsItem;