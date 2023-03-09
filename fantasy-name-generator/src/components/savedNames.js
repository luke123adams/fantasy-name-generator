import { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function UserList({ fullName, setShowList, userEmail }) {

    
    
     const { name } = fullName

    return (
        <div>
        <h1>Welcome back, {userEmail}</h1>
        {name}
        <br>
        </br>
        <button onClick={()=>{setShowList(false)}}>X</button>
        </div>
    )

}