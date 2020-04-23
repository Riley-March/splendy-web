import React from 'react';

import './Toolbar.css';

const ToolBar = (props) => {
    
    return (
        <div className="toolbar-outer">
            <div className="toolbar">
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </div>
    );
}

export default ToolBar;

