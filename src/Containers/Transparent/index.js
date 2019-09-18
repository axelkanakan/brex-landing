import React from 'react';
import './Transparent.css';
import sectionImage from '../../Assets/sectionImageTwo.png';
import arrow from '../../Assets/arrow.svg';

const Transparent = () => 
    <div className="Transparent">
        <div className="t-content">
            <div className="t-image">
                <img src={sectionImage} alt="sectionTwo"/>
            </div>
            <div className="t-description">
                <h1>Transparent Statements</h1>
                <p>View your team's transcations in detail. The Dashboard displays purchases, complete with merchant details, including links to merchant websites, giving you insight into spending</p>
                <p className="t-learn"><span>Learn More</span><img src={arrow} alt="pink-arrow"/></p>
            </div>
        </div>
    </div>


export default Transparent;