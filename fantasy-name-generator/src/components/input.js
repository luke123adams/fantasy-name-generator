import React, {useState} from 'react'

export function Input (){

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



    return (
    <div>
    <form>
    <fieldset>
    <legend>Race:</legend>
    <input type="radio" id="Dwarf" name="Race" value="1" checked={formData.Race === "1"} onChange={handleChange} ></input>
    <label htmlFor="Dwarf">Dwarf</label><br></br>
    <input type="radio" id="Elf" name="Race" value="2" checked={formData.Race === "2"} onChange={handleChange}></input>
    <label htmlFor="Elf">Elf</label><br></br>
    <input type="radio" id="Dragonborn" name="3" checked={formData.Race === "3"} onChange={handleChange}></input>
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
    
    <button className="generate-name" type="submit">Generate name</button>
    </fieldset>
    <pre id="log"></pre>
    </form>
    </div>
)}