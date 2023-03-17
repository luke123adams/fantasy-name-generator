import { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function UserList({ userEmail, savedNames, setShowList, deleteName }) {



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
        <button style={{display: 'inline-block'}} onClick={()=>{
            deleteName(name.full_name)
        }}>Delete</button>
        </div>
        )}
        </div>
    )

}