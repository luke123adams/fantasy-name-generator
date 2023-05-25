import React, {useState, useEffect} from 'react'

export function NameItem ({ name, deleteName, handleDetails }) {


    return (
      <div>
      <p>{name.full_name}</p>
        <button onClick={()=>{handleDetails(name)}}>Details</button>
        <button className="name-btn" onClick={()=>{
            deleteName(name.full_name)
        }}>Delete</button>
      </div>
    )

}
  