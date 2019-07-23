import React from 'react';
import Button from '../Button';
import Outbutton from '../Outbutton';
import './Header.css';

const Header = () => (
    <div className="Header">
        <header className="header-container">
            <div className="logo"><h1>Brex</h1></div>
            <div className="navigation">
            <nav className="nav-container">   
                <h4>How It works</h4> 
                <h4>Rewards</h4> 
                <h4>Pricing</h4> 
                <h4>Contact Us</h4> 
                <h4>FAQ</h4> 
            </nav>
            <div className="buttons-container">
                <Outbutton/>
                <Button/>
            </div>
            </div>
        </header>
    </div>
)

export default Header;