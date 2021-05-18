import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Success.css';
import Profile from './Profile/Profile'
import Repositories from './Repositories/Repositories'


function Success(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/cardamo")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .then(fetch("https://api.github.com/users/cardamo/repos")
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setRepos(result);
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }))
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
        return (
        <div className='success'>
          <Profile props = {items} />
          <Repositories props = {repos} />
        </div>
      );
    }
}

export default Success;