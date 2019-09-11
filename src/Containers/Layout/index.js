import React from 'react';

import Hero from '../../Containers/Hero';
import Footer from '../../Components/Footer';
import Start from '../Start';
import Growth from '../Growth';
import Transparent from '../Transparent';
import Friction from '../Friction';
import Logos from '../../Components/Logos';

const Layout = ()=> (
    <div>
        <Hero/>
        <Logos/>
        <Start/>
        <Growth/>
        <Transparent/>
        <Friction/>
        <Footer/>
    </div>
)

export default Layout;