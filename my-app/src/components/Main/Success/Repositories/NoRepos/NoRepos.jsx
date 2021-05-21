import React from 'react';
import './NoRepos.css';


function NoRepos(props) {
  return (
    <div className = 'no-repos'>
      <div className="no-repos-box">
      <i class="fas fa-times"></i>
      <span>Repository list is empty</span>
      </div>
    </div>
  );
}

export default NoRepos;