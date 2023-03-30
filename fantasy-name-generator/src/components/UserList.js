import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { NameEditor } from './NameEditor'
import { ListItem } from './ListItem'

export default function UserList({ userEmail, savedNames, setShowList, deleteName, getNames }) {


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
        <NameEditor getNames={()=>{getNames()}} nameId={name.id} fullName={name.full_name} description={name.description}></NameEditor>
        <button style={{display: 'inline-block'}} onClick={()=>{
            deleteName(name.full_name)
        }}>Delete</button>
        </div>
        )}
        </div>
    )

}