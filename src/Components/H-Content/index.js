import React from 'react';

import herobg from "../../Assets/hero-bg.png"
import './Hcontent.css';
import Button from '../Button';

const Hcontent = () => (
    <div className="Hcontent">
        <div className="container">
            <div className="title">
                <div className="title-hover">
                <h1>Corporate Cards<br/>For Startups</h1>
                <p>Online application, no personal guarantee, no
                security deposit required and built for modern business. Powered by the Visa Network.</p>
                <div className="hc-button">
                    <Button label={"Learn More"}/>
                </div>
                </div>
            </div>
            <div className="bg-image">
                <img src={herobg} alt="hero"/>
            </div>
        </div>

    </div>
)


export default Hcontent;
