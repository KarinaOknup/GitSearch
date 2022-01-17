import React from "react";
import "./Fail.css";

function Fail(props) {
  return (
    <div className="fail">
      <div className="fail-box">
        <i className="far fa-user"></i>
        <span>User not found</span>
      </div>
    </div>
  );
}
//comments

export default Fail;
