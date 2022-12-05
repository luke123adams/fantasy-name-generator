import logo from './logo.svg';
import './App.css';
import { Input } from './components/input';
import React, {useState} from 'react'

function App() {

  const [ formData, setFormData ] = useState(
    {
        Race:"",
        Gender: ""
    }
);


console.log(formData)
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

function handleClick(){
 console.log(formData) 
}

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://assets1.ignimgs.com/2019/05/29/dndmobile-br-1559158957902_160w.jpg?width=1280" className="App-logo" alt="logo" />
        <div>
    <form>
    <fieldset>
    <legend>Race:</legend>
    <input type="radio" id="Dwarf" name="Race" value="Dwarf" checked={formData.Race === "Dwarf"} onChange={handleChange} ></input>
    <label htmlFor="Dwarf">Dwarf</label><br></br>
    <input type="radio" id="Elf" name="Race" value="Elf" checked={formData.Race === "Elf"} onChange={handleChange}></input>
    <label htmlFor="Elf">Elf</label><br></br>
    <input type="radio" id="Dragonborn" name="Race" checked={formData.Race === "Dragonborn"} value="Dragonborn" onChange={handleChange}></input>
    <label htmlFor="Dragonborn">Dragonborn</label>
    <div>
        </div>
    <br></br>
    <br></br>
    <legend>Gender:</legend>
    <input type="radio" id="Male" name="Gender" value="Male" checked={formData.Gender === "Male"} onChange={handleChange}></input>
    <label htmlFor="Male">Male</label><br></br>
    <input type="radio" id="Female" name="Gender" value="Female" checked={formData.Gender === "Female"} onChange={handleChange}></input>
    <label htmlFor="Female">Female</label><br></br>
    
    <button className="generate-name" onClick={handleClick}>Generate name</button>
    </fieldset>
    <pre id="log"></pre>
    </form>
    </div>
      </header>
    </div>
  );
}

export default App;
