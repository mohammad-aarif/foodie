import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import Promotion from './Promotion';

const Profile = () => {
    return (
        <div className='px-32'>
            <Promotion />
            <ProfileMenu />
            <Outlet />
        </div>
    );
};

export default Profile;