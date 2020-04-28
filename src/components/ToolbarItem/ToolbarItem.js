import React from 'react';

import './ToolbarItem.css';

const ToolbarItem = (props) => {
    const check_active = props.active ? 'item-active' : true;
    return (
        <div>
            {props.has_checkbox ? (
                <label className="checkbox-item">
                    <input onChange={props.handleClick} type="checkbox" defaultChecked={props.is_checked} defaultValue={props.title} />
                    {props.title}
                </label>
            ) : (
                <div className={`text-item ${check_active}`} onClick={props.handleClick}>
                    {props.title}
                </div>
            )}
        </div>
    )
}

export default ToolbarItem;