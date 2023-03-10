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

  const [fullName, setFullName ] = useState({
    name: "",
    race: "",
    gender: ""
  })

  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [showAuth, setShowAuth] = useState(false)
  const [showList, setShowList] = useState(false)
  const [showDiceRoller, setShowDiceRoller] = useState(false)
  const [savedNames, setSavedNames] = useState([])
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email

  useEffect(()=>{
    console.log('listChanged')
  }, [savedNames])

  async function getRandomName(formData) {
    const response = await fetch(`${process.env.REACT_APP_SERVERURL}/api/names/${formData.race}/${formData.gender}`,
    );
    const data = await response.json(response);
    console.log(data.payload);
    console.log(JSON.stringify(formData))
    setFullName({
      name: data.payload,
      race: formData.race,
      gender: formData.gender
    });
    console.log(fullName)
  };


  async function getNames(){
    const response = await fetch (`${process.env.REACT_APP_SERVERURL}/api/user-list/${userEmail}`)
    const data = await response.json()
   setSavedNames(data.payload)
    console.log(data.payload)
  }

  async function addName() {
    const { name, race, gender } = fullName    
  console.log(name)
  console.log(userEmail)
  console.log(race)
  console.log(gender)
   const response = await fetch (`${process.env.REACT_APP_SERVERURL}/api/user-list`,
   {
     method: "POST",
     headers: { "Content-type": "application/json" },
     body: JSON.stringify({ fullName, userEmail}),
   })

   getNames()
   return response
 }

  async function deleteName(full_name) {

    console.log(full_name)
    console.log(userEmail)


    const response = await fetch(`${process.env.REACT_APP_SERVERURL}/api/user-list`, 
    {
      method: "DELETE",
     headers: { "Content-type": "application/json" },
     body: JSON.stringify({ full_name, userEmail}),
    })

    getNames()

    return response
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
        setShowList(false)
        }}>SIGN OUT</button>}
        {authToken && <button 
        
        onClick={()=>{
          getNames(userEmail)
          setShowList(true)
          console.log(savedNames)
        }}>View my saved names</button>}
        </div>
        <div>
          {showAuth && <Auth setShowAuth={setShowAuth} showAuth={showAuth}/>}
        </div>
      </header>
      {showList && <UserList savedNames={savedNames} fullName={fullName} userEmail={userEmail} setShowList={()=>{setShowList()}} deleteName={(full_name)=>{deleteName(full_name)}}/>}
      <Input getRandomName={getRandomName}/>
      <p>{fullName.name}
      {fullName.name.length !== 0 && <button class="name-display" onClick ={()=>{addName()}} >Add to list</button>}</p>
      <button onClick={()=>{setShowDiceRoller(true)}}>Dice Roller</button>
      {showDiceRoller && <DiceRoller setShowDiceRoller={setShowDiceRoller}/>}
    </div>
  );
}

export default App;
