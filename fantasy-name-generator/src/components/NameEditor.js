import React, {useState, useEffect} from 'react'

export function NameEditor ({ getNames, nameDetails, setNameDetails}) {

    const [editMode, setEditMode] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const { fullName, nameId, description } = nameDetails

    useEffect(()=>{
      
    })


    const handleClick = async (e) => {


        console.log(e.value)
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
     
  return (
    <div>
    <button onClick={()=>{console.log(nameId)}}>console log details</button>
      {editMode ? <textarea rows="4" cols="50" id={nameId}>{description}</textarea> : <p>{description}</p>}
      {editMode ? <button onClick={()=>{handleClick(document.getElementById(nameId))}}>Save changes</button> : <button onClick={()=>{setEditMode(true)}}>Edit</button>}
      <button onClick={()=>{setShowDetails(false)}}>Hide details</button>
    </div>
  )

}
  