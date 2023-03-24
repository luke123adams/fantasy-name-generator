import React, {useState} from 'react'


export function Input ({getRandomName}){
    
    const [ formData, setFormData ] = useState(
        {
            race:"",
            gender: ""
        }
    );
    
    console.log(formData.race, formData.gender)
    console.log(buttonDisabler(formData))
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

      function buttonDisabler(formData){
        if (formData.race === '' || formData.gender === ''){
          return true
        }
        else {
          return false
        }
        }



    return (
        <div>
        <form>
        <fieldset>
        <legend>Race:</legend>
        <input type="radio" id="Dwarf" name="race" value="1" checked={formData.race === "1"} onChange={handleChange} ></input>
        <label htmlFor="Dwarf">Dwarf</label><br></br>
        <input type="radio" id="Elf" name="race" value="2" checked={formData.race === "2"} onChange={handleChange}></input>
        <label htmlFor="Elf">Elf</label><br></br>
        <input type="radio" id="Dragonborn" name="race" value="3" checked={formData.race === "3"} onChange={handleChange}></input>
        <label htmlFor="Dragonborn">Dragonborn</label><br></br>
        <input type="radio" id="Human (Calashite)" name="race" value="4" checked={formData.race === "4"} onChange={handleChange}></input>
        <label htmlFor="Human (Calashite)">Human (Calashite)</label><br></br>
        <input type="radio" id="Human (Chondathan)" name="race" value="5" checked={formData.race === "5"} onChange={handleChange}></input>
        <label htmlFor="Human (Chondathan)">Human (Chondathan)</label><br></br>
        <input type="radio" id="Human (Damaran)" name="race" value="6" checked={formData.race === "6"} onChange={handleChange}></input>
        <label htmlFor="Human (Damaran)">Human (Damaran)</label><br></br>
        <input type="radio" id="Human (Chondathan)" name="race" value="7" checked={formData.race === "7"} onChange={handleChange}></input>
        <label htmlFor="Human (Illuskan)">Human (Illuskan)</label><br></br>
        
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
        <button className="generate-name" onClick={()=>{getRandomName(formData)}} disabled={buttonDisabler(formData)}>Generate name</button>
        </div>
)}