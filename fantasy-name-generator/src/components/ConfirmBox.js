import  React, {useState, useEffect} from 'react'

export default function ConfirmBox ({setShowConfirm, newName}) {

        return (
            <div>
                <text>Your new username will be {newName}</text>
                <button>Confirm</button>
                <button onClick={()=>{setShowConfirm(false)}}>Cancel</button>
            </div>
        )
    }

