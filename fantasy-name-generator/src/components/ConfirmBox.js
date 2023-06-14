import  React, {useState, useEffect} from 'react'

export default function ConfirmBox ({setShowEditor, cookies, setShowConfirm, newUsername, userEmail, setCookie}) {

    

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
    setCookie('username', data.username)
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

