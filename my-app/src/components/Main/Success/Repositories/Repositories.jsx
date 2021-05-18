import React from 'react';
import './Repositories.css';
import RepItem from './RepItem/RepItem';


function Repositories(props) {
  let repositories = props.props.map(repItem =><RepItem description = {repItem.description}  url = {repItem.svn_url} name = {repItem.name} key = {repItem.id}/>)
  console.log(repositories)
  return (
      <div className = 'repositories'>
      <h2>Repositories ({props.props.length})</h2>
      <div className="rep-box">
      {repositories}
      </div>
      <div className="pagination-box">
        <span>кол-во показанных</span>
        <div className="pagination">Здесь будет пагинация)</div>
      </div>
    </div>
  );
  }


export default Repositories;