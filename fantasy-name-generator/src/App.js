import './App.css';
import { Input } from './components/input';
import { DiceRoller } from './components/diceroller';
import React, {useState, useEffect} from 'react'
import Auth from './components/Auth.js';
import Modal from './components/Modal';
import { Login } from './components/login';
import UserList from './components/savedNames';
import { useCookies } from 'react-cookie';

// import useRNG from './components/hooks/useRNG';
// import useRNG from './components/hooks/useRNG';

function App() {

  const [fullName, setFullName ] = useState("")
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [showAuth, setShowAuth] = useState(false)
  const [showList, setShowList] = useState(false)
  const [savedNames, setSavedNames] = useState([])
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email


  async function getRandomName(formData) {
    const response = await fetch(`${process.env.REACT_APP_SERVERURL}/api/names/${formData.race}/${formData.gender}`,
    );
    const data = await response.json(response);
    console.log(data.payload);
    console.log(JSON.stringify(formData))
    setFullName(data.payload);
  };

  async function addName(email, fullName, formData) {
    console.log(email)
    console.log(fullName)
    console.log(formData)
    // const response = await fetch (`${process.env.REACT_APP_SERVERURL}/api/user-list`,
    // {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify({ email, fullName, formData }),
    // }
    
    // )
    // return response
  }

  // useEffect((formData)=>{
    
  // getRandomName(formData)
  // }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Uri's Fantasy name generator V 0.000000002</h1>
        <img src="https://assets1.ignimgs.com/2019/05/29/dndmobile-br-1559158957902_160w.jpg?width=1280" className="App-logo" alt="logo" />
        <div>
        {!authToken && <button onClick={()=>{
          setShowAuth(true)
          console.log("clicked")
        }}>SIGNUP/LOGIN</button>}

        {authToken && <button 
        
        onClick={()=>{
            console.log("signout")
        removeCookie('Email')
        removeCookie('AuthToken')
        setShowAuth(false)
        }}>SIGN OUT</button>}
        {authToken && <button 
        
        onClick={()=>{
          console.log('display list')
          setShowList(true)

        }}>View my saved names</button>}
        </div>
        <div>
          {showAuth && <Auth setShowAuth={setShowAuth} showAuth={showAuth}/>}
        </div>
      </header>
      {showList && <UserList savedNames={savedNames} setShowList={()=>{setShowList()}}/>}
      <Input getRandomName={getRandomName}/>
      <p>{fullName}
      {fullName !== "" && <button class="name-display" onClick ={(email, fullName, formData)=>{addName(email, fullName, formData)}} >Add to list</button>}</p>
      <DiceRoller/>
    </div>
  );
}

export default App;
