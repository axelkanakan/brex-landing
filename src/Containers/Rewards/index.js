import React from 'react';


import Outbutton from '../../Components/Outbutton';
import Button from '../../Components/Button';

import './Rewards.css';


const Rewards = () => 
    <div className="Rewards">
        <div className="rewards-container">
            <h1>Exclusive<br/> High-Value Rewards</h1>
            <p>We know what matters to the startups so we partnered with the companies that you use and love.</p>
            <div className="button-section">
                <Outbutton/>
                <Button label={"Learn More"}/>
            </div>
        </div>
    </div>


export default Rewards;