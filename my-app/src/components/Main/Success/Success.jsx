import React from 'react';
import Profile from './Profile/Profile'
import Repositories from './Repositories/Repositories'
import './Success.css';



function Success(props) {
  if(props.state.repositories){
  return(
        <div className='success'>
          <Profile user = {props.state.user} />
          <Repositories repositories = {props.state.repositories} />
        </div>
  )
  }
  else {
    return (<div className='success'>
          <Profile user = {props.state.user} />
    </div>)
  }
}

export default Success;