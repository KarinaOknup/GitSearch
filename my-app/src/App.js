import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Success from './components/Main/Success/Success';


function App(props) {

  return (
    <div className = 'app-wrapper'>
      <Header />
      <Success />
    </div>
  );
}

export default App;
