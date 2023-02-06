import './App.css';
import { Input } from './components/input';
import { DiceRoller } from './components/diceroller';
import React, {useState, useEffect} from 'react'
import LoginButton from './components/login';
import LogoutButton from './components/logout';
// import useRNG from './components/hooks/useRNG';
// import useRNG from './components/hooks/useRNG';

function App() {

  const [result, setResult ] = useState("")

  async function getRandomName(formData) {
    const response = await fetch(`http://localhost:3000/api/names/${formData.race}/${formData.gender}`,
    );
    const data = await response.json(response);
    console.log(data.payload);
    console.log(JSON.stringify(formData))
    setResult(data.payload);
  };

  // useEffect((formData)=>{
    
  // getRandomName(formData)
  // }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Uri's Fantasy name generator V 0.000000002</h1>
        <LoginButton/>
        <LogoutButton/>
        <img src="https://assets1.ignimgs.com/2019/05/29/dndmobile-br-1559158957902_160w.jpg?width=1280" className="App-logo" alt="logo" />
      <Input getRandomName={getRandomName}/>
      <p>{result}</p>
      <DiceRoller/>
      </header>
    </div>
  );
}

export default App;
