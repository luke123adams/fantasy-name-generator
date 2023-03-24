import { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function UserList({ userEmail, savedNames, setShowList, deleteName, getNames }) {

    const [showDetails, setShowDetails] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const handleClick = async (id, e) => {

        let description = e.value
        // setEditMode(false)
        const response = await fetch (`${process.env.REACT_APP_SERVERURL}/api/user-list`,
        {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({description, id}),
        })
        getNames()
        setEditMode(false)

        return response
        
    }



    return (
        <div>
        <h1 style={{display: "inline-block"}}>Welcome back, {userEmail}
        <button onClick={()=>{setShowList(false)}}>X</button>
        </h1>
        <br>
        </br>
        {savedNames.map((name, index)=>
        <div>
        <p style={{display: 'inline-block'}}>{name.full_name}</p>
        {!showDetails && <button onClick={()=>{setShowDetails(true)}}>Details</button>}
        {showDetails &&
        <div>
        {!editMode? <p>{name.description}</p> : <textarea id={name.id} className="description-editor" rows="4" cols="50">{name.description}</textarea>}
        {editMode ? <button onClick={()=>{handleClick(name.id, document.getElementById(name.id))}}>Save changes</button> : <button onClick={()=>{setEditMode(true)}}>Edit</button>}
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