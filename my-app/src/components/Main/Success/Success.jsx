import React from 'react';
import Profile from './Profile/Profile';
import Repositories from './Repositories/Repositories';
import NoRepos from "./Repositories/NoRepos/NoRepos";
import './Success.css';



function Success(props) {
  if(props.repos.length){
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
          <NoRepos />

    </div>)
  }
}


export default Success;