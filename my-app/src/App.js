import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Start from './components/Main/Start/Start';


function App(props) {

  return (
    <div className = 'app-wrapper'>
      <Header />
      <Start />
    </div>
  );
}

export default App;
