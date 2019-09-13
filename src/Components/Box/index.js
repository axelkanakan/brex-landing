import React from 'react';

import './Box.css';
import Quotes from '../../Assets/logos/qoutes-logo.svg'
import Profile from '../../Components/Profile';
import man from '../../Assets/faces/a-one.jpeg';

const Box = () => 
    <div className="Box">
        <div className="box-container">
            <div className="section-one">
            <div className="Right">
            <div className="Quotes">
                <img src={Quotes} alt="quotes"/>
            </div>
            <div className="bar"></div>
            </div>
            <div className="Left">
                <p>Brex has helped us save and close
                 more deals on a consistent basis.
                 The ability to easily keep track of new leads,
                 engaged vistors, and happy customers have been a 
                 blessing for helping us to use our time.
                </p>
            </div>
        </div>
        <div className="section-two">
            <Profile image={man} identity={"face"}/>
            <div className="ceo">
                <p className="name">Arnold Zargoev</p>
                <p className="identity">Owner of Starups</p>
            </div>
        </div>
    </div>
    </div>


export default Box;