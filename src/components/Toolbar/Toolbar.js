import React from 'react';

import './Toolbar.css';

import ToolbarItem from '../ToolbarItem/ToolbarItem';

const Toolbar = (props) => {
    const items = props.items.map((item, index) => {
        return {
            id: index,
            title: item.name,
            is_checked: item.visible,
            has_checkbox: props.has_checkbox,
            active: item.active
        }
    });

    return (
        <div className="outer">
            <div data-testid="toolbar" className="toolbar">
                <h2 data-testid="title">{props.title}</h2>
                <div data-testid="items" className="items">
                    {items.map((item, index) => {           
                        return (
                            <ToolbarItem
                                key={index}
                                handleClick={props.handleClick}
                                has_checkbox={item.has_checkbox}
                                {...item}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Toolbar;