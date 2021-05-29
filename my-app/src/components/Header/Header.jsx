import React from "react";
import "./Header.css";



function Header(props) {
  return (
      <header className="header">
        <i className="fab fa-github git-logo"></i>
        <div className="search-box">
          <i className="fas fa-search search-feedback"></i>
        <form onSubmit={props.handleSubmit}>
              <input
                type="text"
                className="search-input"
                placeholder="Enter GitHub username"
                onChange={(e) => props.setLogin(e.target.value)}
              />
            <input type="submit" className="submit"/>
        </form>
        </div>
      </header>
  );
}

export default Header;
