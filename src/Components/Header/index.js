import React from 'react';
import Button from '../Button';
import Outbutton from '../Outbutton';
import {Menu, X} from 'react-feather';

import './Header.css';

const Header = ({ openNav, handleNavOpen}) => {
    return (
    <div className="Header">
        <header className="header-container">
            <div className="blogo"><h1>Brex</h1></div>
            <div className="navigation">
                <nav className="nav-container">   
                    <h4>How It Works</h4>   
                    <h4>Rewards</h4> 
                    <h4>Pricing</h4>   
                    <h4>Contact Us</h4> 
                    <h4>FAQ</h4> 
                </nav>

                <div className="buttons-container">
                    <Outbutton/>
                    <Button label={"Get Started"}/>
                </div>

                <div className="mini-icon">
                <div onClick={handleNavOpen}>
                    { openNav ?  <X size={40} color={"#f75f81"}/>  : <Menu size={40} color={"#f75f81"}/>  }
                </div>
                </div>
            </div>
        </header>
    </div>
);

}

export default Header;