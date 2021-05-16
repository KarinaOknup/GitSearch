import React from 'react';
import './Repositories.css';


function Repositories(props) {

  return (
    <div className = 'repositories'>
      <h2>Repositories ('переменная с кол-вом репазиториев')</h2>
      <div className="rep-box">
        <div className="rep-item">
          <a href="#">Название репазитория</a>
          <h4>Здесь находится описание примера репазитория</h4>
        </div>
      </div>
      <div className="pagination-box">
        <span>кол-во показанных</span>
        <div className="pagination">Здесь будет пагинация)</div>
      </div>
    </div>
  );
}

export default Repositories;