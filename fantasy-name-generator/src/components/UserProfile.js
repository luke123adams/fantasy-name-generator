import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import ConfirmBox from './ConfirmBox'

export default function UserProfile ({setShowModule, cookies, setCookie, removeCookie}) {

    const [showButtons, setShowButtons] = useState(true)
    const [showEditor, setShowEditor] = useState(null)
    const [usernameInput, setUserNameInput] = useState(null)
    const [showConfirm, setShowConfirm] = useState(false)
    const [username, setUsername] = useState(cookies.username)

    useEffect(() => {
        
        
        setUsername(cookies.username)
        console.log('username cookie changed')
        setShowButtons(true)
      }, [cookies.username])

    const authToken = cookies.AuthToken
    const userEmail = cookies.Email



    return (
        <div>
        <text>Welcome back, {username}</text>
        <button onClick={()=>{setShowModule(null)}}>X</button>
        <button onClick={()=>{console.log('username cookie : ' + cookies.username, 'username js object: ' + username)
        }}>console log username</button>
        { showButtons && <button onClick={()=>{setShowButtons(false); setShowEditor('username')}}>Change username</button>}
        { showButtons && <button onClick={()=>{setShowButtons(false); setShowEditor('password')}}>Change password</button>}
        { showEditor === 'username' && <div>
        { !showConfirm && <button onClick={()=>{setShowEditor(null); setShowButtons(true); setShowConfirm(false)}}>X</button>}
        { !showConfirm && <input placeholder='enter new username' onChange={(e)=>{setUserNameInput(e.target.value); console.log(e.target.value)}}></input>}
        { !showConfirm && <button onClick={()=>{setShowConfirm(true)}}>Change</button>}
        {showConfirm && <ConfirmBox setShowEditor={setShowEditor} setShowButtons={setShowButtons} cookies={cookies} setCookie={()=>{setCookie()}} removeCookie={()=>{removeCookie()}} userEmail={userEmail} username = {username} newUsername={usernameInput} setUsername={()=>{setUsername()}} setShowConfirm={()=>{setShowConfirm()}}/>}
        </div>}
        { showEditor === 'password' && <div>
            <button onClick={()=>{setShowEditor(null); setShowButtons(true)}}>X</button>
            <text>password editor</text>
        </div>}
        </div>
    )

}