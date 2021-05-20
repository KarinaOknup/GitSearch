import React from 'react';
import Profile from './Profile/Profile'
import Repositories from './Repositories/Repositories'
import './Success.css';



function Success(props) {
    if(props.repos){
  return(
        <div className='success'>
          <Profile user = {props.user} />
          <Repositories repos = {props.repos} />
        </div>
  )
  }
  else {
    return (<div className='success'>
          <Profile user = {props.user} />
    </div>)
  }
}

export default Success;