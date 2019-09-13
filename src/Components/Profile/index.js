import React from 'react';

import './Profile.css';

const Profile = ({image, identity}) => 

    <div className="Profile">
        <img src={image} alt={identity} />
    </div>

export default Profile;