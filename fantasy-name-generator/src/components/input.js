import React from 'react'

export function Input (){

    function handleClick(){
        
    }


    return (
    <div>
    <form>
    <fieldset>
    <legend>Please select character details</legend>
    <input type="radio" id="Dwarf" name="Race" value="Dwarf"></input>
    <label for="Dwarf">Dwarf</label><br></br>
    <input type="radio" id="Elf" name="Race" value="Elf"></input>
    <label for="Elf">Elf</label><br></br>
    <input type="radio" id="Dragonborn" name="Race" value="Dragonborn"></input>
    <label for="Dragonborn">Dragonborn</label>
    <div>
        </div>
    <br></br>
    <br></br>
    <input type="radio" id="Male" name="Gender" value="HTML"></input>
    <label for="Male">Male</label><br></br>
    <input type="radio" id="Female" name="Gender" value="HTML"></input>
    <label for="Female">Female</label><br></br>
    
    <button class="generate-name" onClick={handleClick}>Generate name</button>
    </fieldset>
    <pre id="log"></pre>
    </form>
    </div>
)}