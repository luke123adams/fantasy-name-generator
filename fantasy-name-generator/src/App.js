import './App.css';
import { Input } from './components/input';
import React, {useState} from 'react'
// import useRNG from './components/hooks/useRNG';

function App() {


const [result, setResult ] = useState("")
const [randomNumber, setRandomNumber] = useState()
const [ formData, setFormData ] = useState(
  {
      race:"",
      gender: ""
  }
);

let nameArr = []

  async function getRandomName() {
    const response = await fetch(`http://localhost:3000/api/names/${formData.race}/${formData.gender}`,
    );
    const data = await response.json(response);
    console.log(data.payload);
    console.log(JSON.stringify(formData))
    setResult(data.payload);
  };


function getNumber(n){
setRandomNumber((Math.ceil(Math.random()*n)));
console.log(randomNumber)
}

function saveName(){
nameArr.push(result)
console.log(nameArr)
}

function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
            
        }
    })
}


function buttonDisabler(formData){
if (formData.race === "" || formData.gender === ""){
  return true
}
else {
  return false
}
}



  return (
    <div className="App">
      <header className="App-header">
        <h1>Uri's Fantasy name generator V 0.000000001</h1>
        <img src="https://assets1.ignimgs.com/2019/05/29/dndmobile-br-1559158957902_160w.jpg?width=1280" className="App-logo" alt="logo" />
        <div>
        <form>
        <fieldset>
        <legend>Race:</legend>
        <input type="radio" id="Dwarf" name="race" value="1" checked={formData.race === "1"} onChange={handleChange} ></input>
        <label htmlFor="Dwarf">Dwarf</label><br></br>
        <input type="radio" id="Elf" name="race" value="2" checked={formData.race === "2"} onChange={handleChange}></input>
        <label htmlFor="Elf">Elf</label><br></br>
        <input type="radio" id="Dragonborn" name="race" value="3" checked={formData.race === "3"} onChange={handleChange}></input>
        <label htmlFor="Dragonborn">Dragonborn</label>
        <div>
            </div>
        <br></br>
        <br></br>
        <legend>Gender:</legend>
        <input type="radio" id="Male" name="gender" value="M" checked={formData.gender === "M"} onChange={handleChange}></input>
        <label htmlFor="Male">Male</label><br></br>
        <input type="radio" id="Female" name="gender" value="F" checked={formData.gender === "F"} onChange={handleChange}></input>
        <label htmlFor="Female">Female</label><br></br>
        </fieldset>
        <pre id="log"></pre>
        </form>
        </div>
    <button className="generate-name" onClick={getRandomName} disabled={buttonDisabler(formData)}>Generate name</button>
    <button className="save-name" onClick={saveName}>Save name</button>
    <p>{result}</p>
    <text>{nameArr}</text>
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
