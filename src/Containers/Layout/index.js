import React, {Component} from 'react';

import Header from '../../Components/Header';
import Hcontent from '../../Components/H-Content';
import Footer from '../../Components/Footer';
import Start from '../Start';
import Growth from '../Growth';
import Transparent from '../Transparent';
import Friction from '../Friction';
import Logos from '../../Components/Logos';
import Press from '../../Components/Press';
import Integration from '../../Containers/Integration';
import Rewards from '../Rewards';
import Happy from '../Happy';
import HapHeader from '../Hapheader';
import NavDropDown from '../../Components/NavDropdown';
class Layout extends Component{
    state = {
        navOpen:false
    }


    handleNavOpen = () =>{
        this.setState({navOpen:!this.state.navOpen})
    }

    render(){
        const layoutNavOpen = (
        <div>
            <Header openNav={this.state.navOpen} handleNavOpen={this.handleNavOpen}/>
            <NavDropDown openNav={this.state.navOpen}/>
        </div>
        )

        const layoutNavClose = (
        <div>
            <Header openNav={this.state.navOpen} handleNavOpen={this.handleNavOpen}/>
            <NavDropDown openNav={this.state.navOpen}/>
            <Hcontent/>
            <Logos/>
            <Start/>
            <Growth/>
            <Transparent/>
            <Friction/>
            <Integration/>
            <HapHeader/>
            <Happy/>
            <Rewards/>
            <Press/>
            <Footer/>
            </div>
            )

        const layout = this.state.navOpen ? layoutNavOpen : layoutNavClose 
        return (<div>
            {layout}
            </div>
        )
        
    }
} 
export default Layout;