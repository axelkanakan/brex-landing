import React from 'react';
import './Friction.css';
import sectionImage from '../../Assets/sectionImageThree.png';
import arrow from '../../Assets/arrow.svg';

const Friction = () => 
    <div className="Friction">
        <div className="f-content">
            <div className="f-image">
                <img src={sectionImage} alt="sectionThree"/>
            </div>
            <div className="f-description">
                <h1>Frictionless Reciept Capture</h1>
                <p>Brex matches your receipt to the correct transaction automatically. Real time receipt tracking means no more Friday nights manually inputting receipts.</p>
                <p className="f-learn">Learn More <img src={arrow} alt="pink-arrow"/></p>
            </div>
        </div>
    </div>


export default Friction;