import React, { Component } from 'react';
import './Hero.css';
import Header from '../../Components/Header';
import NavDropDown from '../../Components/NavDropdown';
import Footer from '../../Components/Footer';

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
            <Footer/>
        </div>
        )

    }
}

export default Hero;