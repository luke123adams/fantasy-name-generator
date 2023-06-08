import  React, {useState, useEffect} from 'react'

export default function ConfirmBox ({setShowConfirm, newUsername, userEmail}) {

    const handleClick = async () => {

        const response = await fetch(`${process.env.REACT_APP_SERVERURL}/api/user-list/editname`, 
    {
      method: "PATCH",
     headers: { "Content-type": "application/json" },
     body: JSON.stringify({ newUsername, userEmail }),
    })

    return response

    }

        return (
            <div>
                <text>Your new username will be {newUsername}</text>
                <button onClick={()=>{handleClick()}}>Confirm</button>
                <button onClick={()=>{setShowConfirm(false)}}>Cancel</button>
            </div>
        )
    }

