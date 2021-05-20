import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Start from './Start/Start';
import Fail from './Fail/Fail';
import Success from './Success/Success.jsx';



function Main(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.state.user.login}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          props.state.user = items;
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .then(fetch(`https://api.github.com/users/${props.state.user.login}/repos`)
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setRepos(result);
                props.state.repositories = repos;
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }))
  }, []);
  if (!props.state.user.login){
    return (<Start />);
  }
  else if (error) {
    return (<Fail />);
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
        return (
        <Success state = {props.state} />
      );
    }
}

export default Main;