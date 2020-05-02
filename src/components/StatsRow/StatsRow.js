import React from 'react';

import './StatsRow.css';

import Card from '../Card/Card';
import colors from '../../modules/colors';

const StatsRow = ({stats}) => {
    return(
        <div className="stats-row">
            {stats.map((stat, index) => {
                return <Card key={index} title={stat.type} quantity={stat.quantity} color={colors.random_color()}/>
            })}
        </div>
    )
}

export default StatsRow;