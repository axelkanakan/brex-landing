import React from 'react';

import Hero from '../../Containers/Hero';
import Footer from '../../Components/Footer';
import Start from '../Start';
import Growth from '../Growth';
import Transparent from '../Transparent';
import Friction from '../Friction';
import Logos from '../../Components/Logos';
import Press from '../../Components/Press';
import Integration from '../../Containers/Integration';

const Layout = ()=> (
    <div>
        <Hero/>
        <Logos/>
        <Start/>
        <Growth/>
        <Transparent/>
        <Friction/>
        <Integration/>
        <Press/>
        <Footer/>
    </div>
)

export default Layout;