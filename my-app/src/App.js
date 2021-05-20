import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import Start from './components/Main/Start/Start';
import Fail from './components/Main/Fail/Fail';
import Success from './components/Main/Success/Success';

function App(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [login,setLogin] = useState('');
  const [user, setUser] = useState([]);
  const [repos,setRepos] =useState([])
  const [enter,setEnter] = useState(false);

  function getApi(name) {
    console.log('включился');
    fetch(`https://api.github.com/users/${name}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUser(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .then(fetch(`https://api.github.com/users/${name}/repos`)
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
  }
  function changeLogin(name){
    setLogin(name);
    console.log(name);
  }
  function search(){
   setEnter(true)
  }

  useEffect(() => {
    if(enter){
      getApi(user);
      setEnter(false)
  }}, []);

  if (!login){
    return (
      <div className = 'app-wrapper'>
      <Header user = {changeLogin} search = {search} />
      <Start />
      </div>
      );
  }
  else if (error) {
    return (
      <div className = 'app-wrapper'>
      <Header user = {changeLogin} search = {search} />
      <Fail />
      </div>);
  } else if (!isLoaded) {
    return     <div className = 'app-wrapper'>
    <Header user = {changeLogin} search = {search} />
    <p> Загрузка... </p>
  </div>;
  } else {
    return (
    <div className = 'app-wrapper'>
      <Header user = {changeLogin} search = {search} />
      <Success user = {user} repos = {repos}/>
    </div>
  );
}
}

export default App;
