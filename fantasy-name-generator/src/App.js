import './App.css';
import { Input } from './components/input';
import { DiceRoller } from './components/diceroller';
import React, {useState, useEffect} from 'react'
import Auth from './components/Auth.js';
import Modal from './components/Modal';
import { Login } from './components/login';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import { useCookies } from 'react-cookie';
import { NameEditor } from './components/NameEditor';

// import useRNG from './components/hooks/useRNG';
// import useRNG from './components/hooks/useRNG';

function App() {

  const [fullName, setFullName ] = useState({
    name: "",
    race: "",
    gender: ""
  })

  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [showModule, setShowModule] = useState(null)
  const [savedNames, setSavedNames] = useState([])
  const [nameDetails, setNameDetails] = useState({
    fullName: "",
    nameId: "",
    description: ""
  })
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email
  const username = cookies.username

  useEffect(()=>{
    console.log('listChanged')

  }, [savedNames, nameDetails])

  async function getRandomName(formData) {
    console.log(`${process.env.REACT_APP_SERVERURL}/api/names/${formData.race}/${formData.gender}`)
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
    const response = await fetch (`${process.env.REACT_APP_SERVERURL}/api/user-list/${userEmail}`,)
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

  const addToListButton = () => {
    return (
      <div>
      {authToken !== undefined
        ? <button class="name-display" onClick ={()=>{addName()}}>Add to list</button>
        : <p>Sign in to save names</p>
      }
      </div>
    )
  }

  const handleDetails = (full_name, id, description) => {
    console.log(full_name, id, description)
    setShowModule('Editor')
    setNameDetails({
      fullName: full_name,
      nameId: id,
      description: description
    })
  }
 

  // useEffect((formData)=>{
    
  // getRandomName(formData)
  // }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Uri's Fantasy name generator V 0.000000002</h1>
        <img src="https://assets1.ignimgs.com/2019/05/29/dndmobile-br-1559158957902_160w.jpg?width=1280" className="App-logo" alt="logo" />
        </header>
        <div className="navbar-main-container">
        <div className="navbar">
        {!authToken && <button onClick={()=>{
          setShowModule('Auth')
          console.log("clicked")
        }}>SIGNUP/LOGIN</button>}

        {authToken && <button 
        
        onClick={()=>{
            console.log("signout")
        removeCookie('Email')
        removeCookie('AuthToken')
        setShowModule(null)
        }}>SIGN OUT</button>}
         {showModule !== 'Input' && <button onClick={()=>{setShowModule('Input')}}>Name Generator</button>}
        {authToken && <button 
        onClick={()=>{
          getNames(userEmail) 
          setShowModule('List');
          console.log(savedNames)
        }}>View my saved names</button>}
        {showModule !== 'DiceRoller' && <button onClick={()=>{setShowModule('DiceRoller')}}>Dice Roller</button>}
        {showModule !== 'UserProfile' && <button onClick={()=>{setShowModule('UserProfile')}}>My Profile</button>}

        </div>

          {showModule === 'UserProfile' && <UserProfile cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}/>}
          {showModule === 'Auth' && <Auth setShowModule={setShowModule} showModule={showModule}/>}
          {showModule === 'List' && <UserList handleDetails={handleDetails} getNames={()=>{getNames()}} savedNames={savedNames} fullName={fullName} userEmail={userEmail} username={cookies.username} setShowModule={setShowModule} deleteName={(full_name)=>{deleteName(full_name)}}/>}
          {showModule === 'NameEditor' && <NameEditor setShowModule={setShowModule} savedNames={savedNames} setNameDetails={()=>{setNameDetails()}} getNames={()=>{getNames()}} nameDetails={nameDetails}></NameEditor>}
      {showModule === 'Input' && <Input getRandomName={getRandomName} setShowModule={setShowModule}/>}
      <p>{fullName.name}
      {fullName.name.length !== 0 && addToListButton()}
      </p>
      {showModule === 'DiceRoller' && <DiceRoller setShowModule={setShowModule}/>}
        </div>
    </div>
  );
}

export default App;
