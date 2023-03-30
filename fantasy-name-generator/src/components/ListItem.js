import { React, useState } from 'react'

export function ListItem ({ fullName, description, setShowDetails } , showDetails) {

  return (
    <div>
    <p>{fullName}</p>
      {!showDetails ? <button onClick={()=>{setShowDetails(true)}}>Details</button> : <button onClick={()=>{setShowDetails(false)}}>Hide</button>}
      {showDetails && <p>{description}</p>}
      <button onClick={()=>{console.log(fullName, description)}}>name</button>
    </div>
  )

}