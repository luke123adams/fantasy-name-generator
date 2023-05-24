import React, {useState, useEffect} from 'react'

export function NameEditor ({ setShowEditor, getNames, nameDetails, setNameDetails, setShowList}) {

    const [editMode, setEditMode] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    let { fullName, nameId, description } = nameDetails


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
        setShowDetails(false)

        return response
        
    }
     
  return (
    <div>
    <button onClick={()=>{console.log(nameId)}}>console log details</button>
      {editMode ? <textarea rows="4" cols="50" id={nameId}>{description}</textarea> : <p>{description}</p>}
      {editMode ? <button onClick={()=>{handleClick(document.getElementById(nameId))}}>Save changes</button> : <button onClick={()=>{setEditMode(true)}}>Edit</button>}
      <button onClick={()=>{setShowEditor(false); setShowList(true)}}>Back to list</button>
    </div>
  )

}
  