import React, {useState, useEffect} from 'react'
import { DiceHistory } from './DiceHistory'

export function DiceRoller({setShowDiceRoller}){

   // const [randomNumber, setRandomNumber] = useState ("")
    const [noOfDice, setNoOfDice] = useState(1)
    const [modifier, setModifier] = useState(0)
    const [diceTypeCounter, setDiceTypeCounter] = useState(6)
    const [diceType, setDiceType] = useState(4)
    const [diceRolls, setDiceRolls] = useState([])
    const [diceTotal, setDiceTotal] = useState(0)
    const [diceHistory, setDiceHistory] = useState([])
    const [showHistory, setShowHistory] = useState(false)

    


  useEffect(()=>{
    if (diceTotal === 0) {

        setDiceHistory([])

    }

    else if (diceHistory.length < 10) {
        setDiceHistory([
            ...diceHistory,
            {
                D: diceType,
                rolls: diceRolls,
                mod: modifier,
                total: diceTotal+parseInt(modifier)
            }
        ])}
    else {
        setDiceHistory([
            ...diceHistory.slice(1),
            {
                D: diceType,
                rolls: diceRolls,
                mod: modifier,
                total: diceTotal+parseInt(modifier)
            }
        ])
    }},[diceRolls])

  useEffect(()=>{switch(diceTypeCounter) {
    case 1 :
        setDiceType(4);
        break;
    case 2 : 
        setDiceType(6);
        break;
    case 3 : 
        setDiceType(8);
        break;
    case 4 : 
        setDiceType(10);
        break;
    case 5 : 
        setDiceType(12);
        break;
    case 6 :
        setDiceType(20);
        break;
    case 7 :
        setDiceType(100);
        break;

    default: setDiceType(null)
  }
},)
   

  const diceTypeUp = ()=>{
   if (diceTypeCounter <= 6) {
    setDiceTypeCounter(count => count+1)}
   }
  const diceTypeDown = ()=>{

   if (diceTypeCounter >= 2)
    setDiceTypeCounter(count => count-1)}

const handleClick = (e) => {  
    e.preventDefault()
    
    let results = []

    
    for (let i = 0; i < noOfDice; i++) {
// console.log((Math.ceil(Math.random()*diceType)))
results.push((Math.ceil(Math.random()*diceType)));
    }
    setDiceRolls(results)
   // console.log(results)

    const calculateSum = (e) => {
        return e.reduce((total, current)=> {
            return total + current;
        }, 0)
    }   
    setDiceTotal(calculateSum(results))
  //  console.log(diceTotal)

}

const historyDisabler = (e) => {
    if (e.length === 0) {
        return false
    }
    else {
        return true
    }

}

return (
    
<div class="grid-container">

  <div className="counter">
  <div class="grid-container">
    <h1>Dice Roller
    <button onClick={()=>{setShowDiceRoller(false)}}>X</button></h1>
    </div>
    <br></br>
    <input onChange={(event)=>{setNoOfDice(event.target.value)}} type="number" placeholder={noOfDice} id="quantity" name="quantity" min="1" max="10"></input>
    <span className="dice-type"> D{diceType} + </span>
    <input onChange={(event)=>{setModifier(event.target.value)}} type="number" placeholder={modifier} id="quantity" name="quantity" min="1" max="10"></input>
    <span className="dice-roll-result"> = {diceTotal+parseInt(modifier)}</span>
    <br></br>
    <button onClick={diceTypeDown}>-</button>
      <button onClick={diceTypeUp}>+</button>
    <div className="btn__container">
      
     <input type="submit" onClick={(event)=>handleClick(event)}></input>
     {historyDisabler(diceHistory) && <button onClick= {()=>{setShowHistory(true)}} disabled = {showHistory}>view history</button>}
     <button onClick={()=>{setShowHistory(false); console.log(diceHistory)}}>console log history</button>        
    </div>
  </div>


<div class="grid-item">{}</div>
<text>{diceRolls.map((result)=>
    
        <li>{result}</li>
    
)}</text>
{showHistory && <DiceHistory setShowHistory={setShowHistory} diceHistory={diceHistory} setDiceHistory={setDiceHistory}/>}

</div>
)
}