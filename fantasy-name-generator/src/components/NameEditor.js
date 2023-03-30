import React, {useState, useEffect} from 'react'

export function NameEditor ({ getNames, description, fullName, nameId }) {

    const [editMode, setEditMode] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    const handleClick = async (e) => {


        console.log(e.value, nameId)
        setEditMode(false)
        const newDescription = e.value
      
        const response = await fetch (`${process.env.REACT_APP_SERVERURL}/api/user-list`,
        {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({newDescription, nameId}),
        })
        getNames()
        setEditMode(false)

        return response
        
    }

    const handleDetails = () => {
      console.log(editMode, showDetails)
      setShowDetails(true)
    }

if (showDetails === true) 
  return (
    <div>
      {editMode ? <textarea rows="4" cols="50" id={nameId}>{description}</textarea> : <p>{description}</p>}
      {editMode ? <button onClick={()=>{handleClick(document.getElementById(nameId))}}>Save changes</button> : <button onClick={()=>{setEditMode(true)}}>Edit</button>}
      <button onClick={()=>{setShowDetails(false)}}>Hide details</button>
    </div>
  )
  else 
    return (
      <div>
        <button onClick={()=>{handleDetails()}}>Details</button>
      </div>
    )

}
  