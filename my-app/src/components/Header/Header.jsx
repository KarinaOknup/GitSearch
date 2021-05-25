import React from "react";
import "./Header.css";



function Header(props) {
  return (
    <header className="header">
      <i className="fab fa-github git-logo"></i>
      <div className="search-box">
        <i className="fas fa-search search-feedback"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Enter GitHub username"
          onChange={(e) => props.user(e.target.value)}
          onKeyDown={props.search}
        />
      </div>
    </header>
  );
}

export default Header;
