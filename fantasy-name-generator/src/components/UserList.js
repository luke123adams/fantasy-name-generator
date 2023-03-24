import { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function UserList({ userEmail, savedNames, setShowList, deleteName }) {

    const [showDetails, setShowDetails] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const handleClick = (e) => {
        
        
    }



    return (
        <div>
        <h1 style={{display: "inline-block"}}>Welcome back, {userEmail}
        <button onClick={()=>{setShowList(false)}}>X</button>
        </h1>
        <br>
        </br>
        {savedNames.map((name)=>
        <div>
        <p style={{display: 'inline-block'}}>{name.full_name}</p>
        {!showDetails && <button onClick={()=>{setShowDetails(true)}}>Details</button>}
        {showDetails &&
        <div>
        {!editMode? <p>{savedNames.description}</p> : <textarea className="description-editor" rows="4" cols="50">{savedNames.description}</textarea>}
        {editMode ? <button onClick={(name)=>{handleClick(name, document.querySelector(".description-editor"))}}>Save changes</button> : <button onClick={()=>{setEditMode(true)}}>Edit</button>}
        </div>
        }
        <button style={{display: 'inline-block'}} onClick={()=>{
            deleteName(name.full_name)
        }}>Delete</button>
        </div>
        )}
        </div>
    )

}