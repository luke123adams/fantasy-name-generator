import React, {useState, useEffect} from 'react'

export function NameEditor ({ setShowEditor, getNames, nameDetails, setNameDetails, setShowList}) {

  let { fullName, nameId, description } = nameDetails

    const [editMode, setEditMode] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [desc, setDesc] = useState(description)

    const handleChange = (e) => {
      setDesc(e.target.value)
      console.log(desc)
    }


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
        setShowList(false)
        return response
        
    }
     
  return (
    <div>
    <h1>{fullName}</h1>
      {editMode ? <textarea onChange={(e)=>{handleChange(e)}}rows="4" cols="50" id={nameId}>{desc}</textarea> : <p>{desc}</p>}
      {editMode ? <button onClick={()=>{handleClick(document.getElementById(nameId))}}>Save changes</button> : <button onClick={()=>{setEditMode(true)}}>Edit</button>}
      <button onClick={()=>{setShowEditor(false); setShowList(true)}}>Back to list</button>
    </div>
  )

}
  