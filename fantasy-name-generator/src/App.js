import './App.css';
import { Input } from './components/input';
import { DiceRoller } from './components/diceroller';
import React, {useState} from 'react'
// import useRNG from './components/hooks/useRNG';
// import useRNG from './components/hooks/useRNG';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Uri's Fantasy name generator V 0.000000002</h1>
        <img src="https://assets1.ignimgs.com/2019/05/29/dndmobile-br-1559158957902_160w.jpg?width=1280" className="App-logo" alt="logo" />
      <Input/>
      <DiceRoller/>
      </header>
    </div>
  );
}

export default App;
