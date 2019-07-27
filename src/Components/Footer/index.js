import React from 'react';
import './Footer.css';
import Button from '../Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faYoutube, faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = ()=> (
    <div className="Footer">
        <div className="left">
            <div className="left-content">
            <div className="news-letter"><h2>Join Our Newsletter</h2></div>
            <div className="input">
                <input type='text' placeholder="Your Email Address"/>
                <Button label={"Subscribe"}/>
            </div>
            <div className="social-icons">
                <div className="s-icon">
                    <FontAwesomeIcon icon={faFacebookSquare} color={'#fff'} size={"lg"}/>
                </div>
                <div className="s-icon">
                    <FontAwesomeIcon icon={faInstagram} color={'#fff'} size={"lg"} />
                </div>
                <div className="s-icon">
                    <FontAwesomeIcon icon={faYoutube} color={'#fff'} size={"lg"} />
                </div>
                <div className="s-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} color={'#fff'} size={"lg"} />
                </div>
                <div className="s-icon">
                    <FontAwesomeIcon icon={faTwitter} color={'#fff'} size={"lg"} />
                </div>
            </div>
            </div>

        </div>
        <div className="right-content"></div>
    </div>
)

export default Footer;