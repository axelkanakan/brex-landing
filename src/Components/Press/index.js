import React from 'react';

import './Press.css';

import bloomberg from '../../Assets/logos/bloomberg-logo.svg';
import businsider from '../../Assets/logos/businsider-logo.svg';
import forbes from '../../Assets/logos/forbes-logo.svg';
import fortune from '../../Assets/logos/fortune-logo.svg';
import newyork from '../../Assets/logos/NewYorkTimes-logo.svg';
import wsj from '../../Assets/logos/wsj-logo.svg';
import techcrunch from '../../Assets/logos/techcrunch-logo.svg';


const Press = () => {
    return (
        <div className="Press">
            <div className="press-container">
                <div className="logo">
                    <img src={wsj} alt="wsj"/>
                </div>
                <div className="logo">
                    <img src={fortune} alt="fortune"/>
                </div>
                <div className="logo">
                    <img src={bloomberg} alt="bloomberg"/>
                </div>
                <div className="logo">
                    <img src={forbes} alt="forbes"/>
                </div>
            </div>
            <div className="press-container">
                <div className="logo">
                    <img src={newyork} alt="wsj"/>
                </div>
                <div className="logo">
                    <img src={techcrunch} alt="techcrunch"/>
                </div>
                <div className="logo">
                    <img src={businsider} alt="business-insider"/>
                </div>
            </div>
        </div>
    )
}

export default Press;