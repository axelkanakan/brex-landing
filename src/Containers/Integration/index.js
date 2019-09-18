import React from 'react';
import arrow from '../../Assets/arrow.svg';
import './Integration.css';

import xero from '../../Assets/logos/xero-logo.svg';
import quickbooks from '../../Assets/logos/quickbooks-logo.svg';
import netsuite from '../../Assets/logos/netsuit-logo.svg';
import expensify from '../../Assets/logos/expensify-logo.svg';

const Integration = () =>    
 <div className="Integration">
    <div className="i-content">
    <div className="integration-container">
        <div className="int-logo">
        <img src={xero} alt="xero"/>
        </div>
        <div className="int-logo">
            <img src={quickbooks} alt="quickbooks"/>
        </div>
        <div className="int-logo">
            <img src={netsuite} alt="netsuite"/>
        </div>
        <div className="int-logo">
            <img src={expensify} alt="expensify"/>
        </div>
    </div>
    <div className="i-description">
        <h1>Smart Intergration</h1>
        <p>Brex understands that startups are different from traditional small business. Our application takes only minutes, so you can get back to building your business.</p>
        <p className="i-learn"><span>Learn More</span><img src={arrow} alt="pink-arrow"/></p>
    </div>
    </div>
</div>


export default Integration;