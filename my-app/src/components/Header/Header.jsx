import React from 'react';
import './Header.css';


function Header(props) {

  return (
    <header className = 'header'>
      <i className="fab fa-github git-logo"></i>
      <div className="search-box">
        <i className="fal fa-search search-feedback"></i>
        <input type="text" className="search-input" placeholder="Search"/>
      </div>
    </header>
  );
}

export default Header;