import React from 'react';

import './Logos.css';

import algolia from '../../Assets/logos/algolia-logo.svg'
import color from '../../Assets/logos/color-logo.svg';
import flexport from '../../Assets/logos/flexport-logo.svg';
import sofi from '../../Assets/logos/sofi-logo.svg';
import ycomb from '../../Assets/logos/ycombinator-logo.svg';

const Logos = () => {
  return  (
        <div className="Logos">
            <div className="logos-container">
            <div className="logo">
                <img src={algolia} alt="algoi"/>
            </div>
            <div className="logo">
                <img src={sofi} alt="sofi"/>
            </div>
            <div className="logo color">
                <img src={color} alt="color"/>
            </div>
            <div className="logo">
                <img src={flexport} alt="flexport"/>
            </div>
            <div className="logo">
                <img src={ycomb} alt="ycombinator"/>
            </div>
            </div>
        </div>)
}

export default Logos;