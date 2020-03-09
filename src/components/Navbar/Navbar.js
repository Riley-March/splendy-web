import React from 'react';

import './Navbar.css';

const Navbar = ({nav_title}) => {

    return (
        <div className="navbar">
            <h2>{nav_title}</h2>
        </div>
    )
}

export default Navbar;