import { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function UserList({fullName, setShowList}) {

    return (
        <div>{fullName}
        <button onClick={()=>{setShowList(false)}}>X</button>
        </div>
    )

}