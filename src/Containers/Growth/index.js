import React from 'react';
import './Growth.css';
import sectionImage from '../../Assets/sectionImageOne.png';
import arrow from '../../Assets/arrow.svg';

const Growth = () => 
    <div className="Growth">
        <div className="Growth-title">
        <h1> Great For Growth</h1>
        <p> Startups don't remain startups from long. The Brex card comes with data and expense managament tools to control and manage the spending of scaling enterprise.</p>
        </div>
        <div className="g-content">
            <div className="g-image">
                <img src={sectionImage} alt="sectionOne"/>
            </div>
            <div className="g-description">
                <h1>Full Control</h1>
                <p>Use the dashboard to instantly add cardholders and set individual limits based on your business needs.</p>
                <p className="learn">Learn More <img src={arrow} alt="pink-arrow"/></p>
            </div>
        </div>
    </div>


export default Growth;