import { useState } from 'react'
import { useCookies } from 'react-cookie'
import ConfirmBox from './ConfirmBox'

export default function UserProfile ({cookies, setCookie, removeCookie}) {

    const [showButtons, setShowButtons] = useState(true)
    const [showEditor, setShowEditor] = useState(null)
    const [usernameInput, setUserNameInput] = useState(null)
    const [showConfirm, setShowConfirm] = useState(false)


    const authToken = cookies.AuthToken
    const userEmail = cookies.Email
    const username = cookies.username




    return (
        <div>
        <text>Welcome back, {username}</text>
        { showButtons && <button onClick={()=>{setShowButtons(false); setShowEditor('username')}}>Change username</button>}
        { showButtons && <button onClick={()=>{setShowButtons(false); setShowEditor('password')}}>Change password</button>}
        { showEditor === 'username' && <div>
        <button onClick={()=>{setShowEditor(null); setShowButtons(true); setShowConfirm(false)}}>X</button>
        <input placeholder='enter new username' onChange={(e)=>{setUserNameInput(e.target.value); console.log(e.target.value)}}></input>
        <button onClick={()=>{setShowConfirm(true)}}>Change</button>
        {showConfirm && <ConfirmBox userEmail={userEmail} newUsername={usernameInput} setShowConfirm={()=>{setShowConfirm()}}/>}
        </div>}
        { showEditor === 'password' && <div>
            <button onClick={()=>{setShowEditor(null); setShowButtons(true)}}>X</button>
            <text>password editor</text>
        </div>}
        </div>
    )

}