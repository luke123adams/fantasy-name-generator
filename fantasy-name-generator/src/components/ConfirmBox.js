import  React, {useState, useEffect} from 'react'
import {getAll, get} from 'react-cookie'

export default function ConfirmBox ({username, setUsername, setShowEditor, cookies, setShowConfirm, newUsername, userEmail, setCookie, removeCookie}) {


    const handleClick = async () => {

        console.log(newUsername, userEmail)


        const response = await fetch(`${process.env.REACT_APP_SERVERURL}/api/user-list/editname`,
    {
     method: "PATCH",
     headers: { "Content-type": "application/json" },
     body: JSON.stringify({ newUsername, userEmail }),
    }
    )
    

    const data = await response.json()
    console.log('payload:' + data.payload)
    console.log('confirm clicked')
    removeCookie('username')
    setCookie('username', data.payload)
    getAll()
    console.log('username cookie: ' + cookies.username)
    setUsername(data.payload)
    console.log('username: ' + username)

    setShowConfirm(false)
    }

        return (
            <div>
                <text>Your new username will be {newUsername}</text>
                <button onClick={()=>{handleClick()}}>Confirm</button>
                <button onClick={()=>{setShowConfirm(false)}}>Cancel</button>
            </div>
        )
    }

