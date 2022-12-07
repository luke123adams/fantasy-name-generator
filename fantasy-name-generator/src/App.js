import './App.css';
//import { Input } from './components/input';
import React, {useState} from 'react'

function App() {

  const [ formData, setFormData ] = useState(
    {
        race:"",
        gender: ""
    }
);

const [result, setResult ] = useState("")


  async function getRandomName() {
    const response = await fetch(`http://localhost:3000/api/names/${formData.race}/${formData.gender}`,
    );
    const data = await response.json(response);
    console.log(data.payload);
    console.log(JSON.stringify(formData))
    setResult(data.payload);
  };



//const onSubmit = async data => { console.log(data); };

function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
            
        }
    })
}

  return (
    <div className="App">
      <header className="App-header">
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
    <button className="generate-name" onClick={getRandomName}>Generate name</button>
    <p>{result}</p>
      </header>
    </div>
  );
}

export default App;
