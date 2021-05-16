import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Fail from './components/Main/Fail/Fail';


function App(props) {

  return (
    <div className = 'app-wrapper'>
      <Header />
      <Fail />
    </div>
  );
}

export default App;
