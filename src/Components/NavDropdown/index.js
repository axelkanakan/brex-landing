import React from 'react';
import Outbutton from '../Outbutton';
import Button from '../Button';

import './NavDropdown.css';


const NavDropDown = ({openNav}) => {
    
    if(openNav){
        return (
            <div className="nav-dropdown">
                <div className="nav-items">
                    <h4>How It Works</h4>
                </div>
                <div className="nav-items">
                    <h4>Rewards</h4>
                </div>
                <div className="nav-items">
                    <h4>Pricing</h4>
                </div>
                <div className="nav-items">
                    <h4>Contact Us</h4>
                </div>
                <div className="nav-items">
                    <h4>FAQ</h4>
                </div>
                <div className="nav-items">
                    <Button/>
                </div>
                <div className="nav-items">
                <Outbutton/>
                </div>
        </div>
        )
    }else{
        return null
    }



}

export default NavDropDown;