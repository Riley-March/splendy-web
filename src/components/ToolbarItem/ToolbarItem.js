import React from 'react';

import './ToolbarItem.css';

const ToolbarItem = (props) => {
    const check_active = props.active ? 'item-active' : true;

    return (
        <div key={props.key}>
            {props.is_checkbox ? (
                <label className="checkbox-item">
                    <input onChange={props.handleCheck} type="checkbox" defaultChecked={props.isChecked} defaultValue={props.value} />
                    {props.value}
                </label>
            ) : (
                <div className={`text-item ${check_active}`} onClick={props.handleCheck}>
                    {props.value}
                </div>
            )}
        </div>
    )
}

export default ToolbarItem;