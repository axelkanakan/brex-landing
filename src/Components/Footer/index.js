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
        <div className="right">
            <div className="right-content">
                <div className="col-1">
                    <h3>Product</h3>
                    <p>Features</p>
                    <p>Use Cases</p>
                    <p>Pricing</p>
                    <p>Live Demo</p>
                </div>
                <div className="col-1">
                    <h3>Company</h3>
                    <p>About Brex</p>
                    <p>Careers</p>
                    <p>Blog</p>
                </div>
                <div className="col-1">
                <h3>Resources</h3>
                    <p>Press</p>
                    <p>Security</p>
                    <p>Privacy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-content">
                <p>© 2019 "Brex" and the Brex logo are registered trademarks.
                The Brex Visa© Commercial Card is issued by Sutton Bank, Member FDIC, pursuant to a liscense from Visa USA Inc. and can be used wherever Visa Commercial cards are accepted. Terms and conditions apply. See the Brex Platform Agreement for details.
                The Brex Landing Page Redesign - Designed by OWW - Developed by Axel Kanakan </p>
            </div>
        </div>
    </div>
)

export default Footer;