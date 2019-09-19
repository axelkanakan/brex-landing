import React, { Component } from 'react';
import './Hero.css';
import Header from '../../Components/Header';
import NavDropDown from '../../Components/NavDropdown';
import Hcontent from '../../Components/H-Content';

class Hero extends Component{
    state = {
        navOpen: false
    }

    handleNavOpen = () =>{
        this.setState({navOpen:!this.state.navOpen})
    }

    render(){
        return(
        <div className="Hero">
            <Header openNav={this.state.navOpen} handleNavOpen={this.handleNavOpen}/>
            <NavDropDown openNav={this.state.navOpen}/>
            <Hcontent/>
        </div> 
        )

    }
}

export default Hero;