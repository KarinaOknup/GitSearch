import React from 'react';
import './Profile.css';

function Profile(props) {
  return (
    <div className = 'profile'>
      <img src = {props.user.avatar_url} alt="имя разработчика" className='user-img' />
      <h2>{props.user.name}</h2>
      <a href={props.user.html_url}>{props.user.login}</a>
      <div className="followers">
        <i className="fas fa-user-friends"></i>
        <span>{props.user.followers} followers</span>
      </div>
      <div className="following">
        <i className="fas fa-user"></i>
        <span>{props.user.following} following</span>
      </div>
    </div>
  );
}

export default Profile;