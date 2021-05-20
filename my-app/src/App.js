import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import state from './state';

function App(props) {
    return (
    <div className = 'app-wrapper'>
      <Header state = {state} />
      <Main state = {state}/>
    </div>
  );
}

export default App;
