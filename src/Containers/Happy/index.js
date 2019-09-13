import React from 'react';

import Profile from '../../Components/Profile';
import Box from '../../Components/Box';
import kevin from '../../Assets/faces/KevinWu.jpg';
import './Happy.css';


const Happy = () => <div className="Happy">
    <Profile image={kevin} alt={"kevin"} />
    <Box/>
</div>

export default Happy;