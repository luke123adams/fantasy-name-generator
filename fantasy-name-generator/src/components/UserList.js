import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { NameEditor } from './NameEditor'
import { ListItem } from './ListItem'

export default function UserList({ handleDetails, userEmail, savedNames, setShowList, deleteName, getNames }) {


    return (
        <div>
        <h1 style={{display: "inline-block"}}>Welcome back, {userEmail}
        <button onClick={()=>{setShowList(false)}}>X</button>
        </h1>
        <br>
        </br>
        {savedNames.map((name)=>
        <div>
        <p>{name.full_name}</p>
        <div>
        <button onClick={()=>{console.log(name.full_name, name.id, name.description)}}>console log details</button>
        <button onClick={()=>{handleDetails(name.full_name, name.id, name.description)}}>Details</button>
      </div>
        <button style={{display: 'inline-block'}} onClick={()=>{
            deleteName(name.full_name)
        }}>Delete</button>
        </div>
        )}
        </div>
    )

}