import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faTicketAlt, faChartPie, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const Navbar = ({nav_title}) => {

    return (
        <div className="navbar-outer">
            <div className="navbar">
                <span>
                    <h2>
                        <FontAwesomeIcon icon={faCampground} className="icon yellow"/>
                        {nav_title}
                    </h2>
                </span>
                <span className="navbar-links">
                    <NavLink className="link" to="/">
                        <h2>
                            <FontAwesomeIcon icon={faTicketAlt} className="icon green"/>
                            Tickets
                        </h2>
                    </NavLink>
                    <NavLink className="link" to="/stats">
                        <h2>
                            <FontAwesomeIcon icon={faChartPie} className="icon pink"/>
                            Stats
                        </h2>
                    </NavLink>
                    <NavLink className="link" to="/about">
                        <h2>
                            <FontAwesomeIcon icon={faInfoCircle} className="icon blue"/>
                            About
                        </h2>
                    </NavLink>
                </span>
            </div>
        </div>
    )
}

export default Navbar;