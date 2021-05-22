import React from "react";
import "./RepItem.css";

function RepItem(props) {
  return (
    <div className="rep-item">
      <a href={props.url} target="_blank" rel="noreferrer">
        {props.name}
      </a>
      <h4>
        {props.description ||
          "It is sad, but there are not any description ..."}
      </h4>
    </div>
  );
}

export default RepItem;
