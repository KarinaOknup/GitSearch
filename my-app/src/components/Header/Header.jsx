import React from 'react';
import './Header.css';


function Header(props) {
  const [login, setLogin] = React.useState('');
  function search(e){
    if(e.key==='Enter'){
      props.state.user.login = login;
      console.log(props);
    }
  }
      return (
    <header className = 'header'>
      <i className="fab fa-github git-logo"></i>
      <div className="search-box">
        <i className="fas fa-search search-feedback"></i>
        <input type="text" className="search-input" placeholder="Enter GitHub username"  onChange = {e => setLogin( e.target.value )} onKeyDown = {search} />
      </div>
    </header>
  );
}

export default Header;