import React from 'react';
import './Profile.css';
import me from './me.jpg'


function Profile(props) {

  return (
    <div className = 'profile'>
      {/* ВСЁ ГЕНЕРИРУЕТСЯ И ССЫЛКИ ВСТАВЛЯЮТСЯ
      ПОСРЕДСТВОМ ЗАПРОСА НА API*/}
      <img src={me} alt="имя разработчика" className='user-img' />
      <h2>Имя разработчика</h2>
      <a href="#">Ccылка на акк</a>
      <div className="followers">
        <i class="fas fa-user-friends"></i>
        <span>followers</span>
      </div>
      <div className="following">
        <i class="fas fa-user"></i>
        <span>following</span>
      </div>
    </div>
  );
}

export default Profile;