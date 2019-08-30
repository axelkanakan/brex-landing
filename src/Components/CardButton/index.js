import React from 'react';

import './cardbutton.css';


const CardButton = ({title, onHover})=> {
    return (
        <div className="btn" style={onHover? {color:'white'} : {color:'var(--primary-pink)'}}>
            <span style={ onHover? {background:'transparent'} : {background:'white'} } >{title}</span>
        </div>
    )
}

export default CardButton;
