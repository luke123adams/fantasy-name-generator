import './App.css';
import { Input } from './components/input';
import React, {useState} from 'react'
// import useRNG from './components/hooks/useRNG';

function App() {

  const [randomNumber, setRandomNumber] = useState ("")

function getNumber(n){
setRandomNumber((Math.ceil(Math.random()*n)));
console.log(randomNumber)
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>Uri's Fantasy name generator V 0.000000002</h1>
        <img src="https://assets1.ignimgs.com/2019/05/29/dndmobile-br-1559158957902_160w.jpg?width=1280" className="App-logo" alt="logo" />
      <Input/>
      </header>
      <div class="grid-container">
  <button class="grid-item" onClick={()=>getNumber(100)}>Roll a d100</button>
  <button class="grid-item" onClick={()=>getNumber(20)}>Roll a d20</button>
  <button class="grid-item" onClick={()=>getNumber(12)}>Roll a d12</button>
  <button class="grid-item" onClick={()=>getNumber(10)}>Roll a d10</button>
  <button class="grid-item" onClick={()=>getNumber(8)}>Roll a d8</button>
  <button class="grid-item" onClick={()=>getNumber(6)}>Roll a d6</button>
  <button class="grid-item" onClick={()=>getNumber(4)}>Roll a d4</button>


  <div class="grid-item">{}</div>
  <text>{randomNumber}</text>
  </div>
    </div>
  );
}

export default App;
