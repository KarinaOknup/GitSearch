import React from 'react';
import './Profile.css';

function Profile(props) {
  return (
    <div className = 'profile'>
      <img src = {props.props.avatar_url} alt="имя разработчика" className='user-img' />
      <h2>{props.props.name}</h2>
      <a href={props.props.html_url}>{props.props.login}</a>
      <div className="followers">
        <i className="fas fa-user-friends"></i>
        <span>{props.props.followers} followers</span>
      </div>
      <div className="following">
        <i className="fas fa-user"></i>
        <span>{props.props.following} following</span>
      </div>
    </div>
  );
}

export default Profile;