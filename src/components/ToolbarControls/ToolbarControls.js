import React from 'react';

import './ToolbarControls.css';
import ToolbarItem from '../ToolbarItem/ToolbarItem';

const ToolbarControls = ({controls, handleControlClick}) => {
    return(
        <div className="toolbar-controls">
            {controls.map(control => {                    
                return (
                    <ToolbarItem
                        handleCheck={handleControlClick}
                        is_checkbox={control.is_checkbox}
                        {...control}
                    />
                )
            })}
        </div>
    )
}

export default ToolbarControls;