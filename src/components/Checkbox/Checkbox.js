import React, { useState } from 'react'

import './Checkbox.css';

const Checkbox = (props) => {
    
    return (
        <label className="checkbox">
            <input onChange={props.handleCheck} type="checkbox" defaultChecked={props.isChecked} defaultValue={props.value} />
            {props.value}
        </label>
    );
}

export default Checkbox;