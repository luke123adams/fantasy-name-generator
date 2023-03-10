import React, {useState, useEffect} from 'react'

export function DiceRoller(){

    const [randomNumber, setRandomNumber] = useState ("")
    const [noOfDice, setNoOfDice] = useState(1)
    const [diceTypeCounter, setDiceTypeCounter] = useState(6)
    const [diceType, setDiceType] = useState(4)
    const [diceRolls, setDiceRolls] = useState([])


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

  const diceCount = (n) => {
    setNoOfDice(parseInt(n))
  }

  const diceTypeUp = ()=>{
   if (diceTypeCounter <= 6) {
    setDiceTypeCounter(count => count+1)}
   }
  const diceTypeDown = ()=>{

   if (diceTypeCounter >= 2)
    setDiceTypeCounter(count => count-1)}

const getNumber = () => {   
    let results = []
    
    for (let i = 1; i < noOfDice; i++) {

results.push((Math.ceil(Math.random()*diceType)));
// console.log(randomNumber)
    }
    setDiceRolls(results)
}

return (
<div class="grid-container">

  <div className="counter">
    <h1>Dice Roller</h1>
    <br></br>
    <span className="dice-type-counter">{diceTypeCounter}</span>
    <br></br>
    <span className="dice-type">{diceType}</span>
    <br></br>
    <span className="dice-roll-result">{diceRolls}</span>
    <button onClick={diceTypeDown}>-</button>
      <button onClick={diceTypeUp}>+</button>
    <div className="btn__container">
      <input onChange={(event)=>{diceCount(event.target.value)}}type="number" id="quantity" name="quantity" min="1" max="10" placeholder={noOfDice}></input>
    </div>
  </div>


<div class="grid-item">{}</div>
<text>{randomNumber}</text>
</div>
)
}