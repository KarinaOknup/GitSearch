import React from 'react';
import './Success.css';
import Profile from './Profile/Profile'
import Repositories from './Repositories/Repositories'


function Success(props) {

  return (
    <div className='success'>
      <Profile />
      <Repositories />
    </div>
  );
}

export default Success;