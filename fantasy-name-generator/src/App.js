import './App.css';
import { Input } from './components/input';
import { DiceRoller } from './components/diceroller';
import React, {useState, useEffect} from 'react'
import Auth from './components/Auth.js';
import Modal from './components/Modal';
import { Login } from './components/login';
import UserList from './components/UserList';
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
  const [showAuth, setShowAuth] = useState(false)
  const [showList, setShowList] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [showDiceRoller, setShowDiceRoller] = useState(false)
  const [showEditor, setShowEditor] = useState(false)
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
    setShowEditor(true)
    setShowList(false)
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
        setShowEditor(false)
        setShowDiceRoller(false)
        }}>SIGN OUT</button>}
         {!showInput && <button onClick={()=>{setShowInput(true)}}>Name Generator</button>}
        {authToken && <button 
        onClick={()=>{
          getNames(userEmail) 
          setShowList(true);
          setShowDiceRoller(false);
          setShowInput(false)
          console.log(savedNames)
        }}>View my saved names</button>}
        {!showDiceRoller && <button onClick={()=>{setShowDiceRoller(true); setShowInput(false); setShowList(false)}}>Dice Roller</button>}

        </div>

          {showAuth && <Auth setShowAuth={setShowAuth} showAuth={showAuth}/>}
          {showList && <UserList handleDetails={handleDetails} getNames={()=>{getNames()}} savedNames={savedNames} fullName={fullName} userEmail={userEmail} username={cookies.username} setShowList={()=>{setShowList()}} deleteName={(full_name)=>{deleteName(full_name)}}/>}
          {showEditor && <NameEditor setShowEditor={setShowEditor} setShowList={setShowList} savedNames={savedNames} setNameDetails={()=>{setNameDetails()}} getNames={()=>{getNames()}} nameDetails={nameDetails}></NameEditor>}
      {showInput && <Input getRandomName={getRandomName} setShowInput={setShowInput}/>}
      <p>{fullName.name}
      {fullName.name.length !== 0 && addToListButton()}
      </p>
      {showDiceRoller && <DiceRoller setShowDiceRoller={setShowDiceRoller}/>}
        </div>
    </div>
  );
}

export default App;
