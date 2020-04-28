import React from 'react';

import './Toolbar.css';

import ToolbarItem from '../ToolbarItem/ToolbarItem';

const ToolBar = (props) => {
    let toolbar_items = props.items.map((item, index) => {
        return {
            id: index,
            title: item.name,
            is_checked: item.visible,
            has_checkbox: props.has_checkbox,
            active: item.active
        }
    });

    return (
        <div className="toolbar-outer">
            <div className="toolbar">
                <h2>{props.title}</h2>
                <div className="toolbar-items">
                    {toolbar_items.map((control, index) => {           
                        return (
                            <ToolbarItem
                                key={index}
                                handleClick={props.handleClick}
                                has_checkbox={control.has_checkbox}
                                {...control}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default ToolBar;