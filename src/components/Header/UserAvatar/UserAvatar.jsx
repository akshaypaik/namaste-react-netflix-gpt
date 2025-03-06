import React from 'react';
import './UserAvatar.css';

const UserAvatar = () => {
  return (
    <div className='user-avatar absolute top-80'>
        <ul className='text-sm'>
            <li>Manage Profiles</li>
            <li>Account</li>
            <li>Help Centre</li>
        </ul>
        <div>Sign Out of Netflix</div>
    </div>
  )
}

export default UserAvatar