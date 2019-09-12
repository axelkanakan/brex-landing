import React from 'react';
import arrow from '../../Assets/arrow.svg';
import './Integration.css';


const Integration = () =>    
 <div className="Integration">
    <div className="i-content">
    <div className="integration-container">
        <div className="int-logo"></div>
        <div className="int-logo"></div>
        <div className="int-logo"></div>
        <div className="int-logo"></div>
    </div>
    <div className="i-description">
        <h1>Smart Intergration</h1>
        <p>Brex understands that startups are different from traditional small business. Our application takes only minutes, so you can get back to building your business.</p>
        <p className="i-learn">Learn More <img src={arrow} alt="pink-arrow"/></p>
    </div>
    </div>
</div>


export default Integration;