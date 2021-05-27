import React from "react";
import Profile from "./Profile/Profile";
import Repositories from "./Repositories/Repositories";
import NoRepos from "./Repositories/NoRepos/NoRepos";
import "./Success.css";

function Success(props) {
  if (props.user.public_repos) {
    return (
      <div className="success">
        <Profile user={props.user} />
        <Repositories user_name={props.user.login} length={props.user.public_repos}/>
      </div>
    );
  } else {
    return (
      <div className="success">
        <Profile user={props.user} />
        <NoRepos />
      </div>
    );
  }
}

export default Success;
