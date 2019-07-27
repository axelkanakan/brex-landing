import React from 'react';

import './Button.css';

const Button = (props)=> (
    <div  className="Button" href="#" >
        <span>{props.label}</span>
    </div>
)

export default Button;