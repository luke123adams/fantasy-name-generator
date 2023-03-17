import React, {useState, useEffect} from 'react'

export function DiceHistory ({diceHistory, setDiceHistory, setShowHistory}) {

    const calculateSum = (e) => {
        return e.reduce((total, current)=> {
            return total + current;
        }, 0)
    }   

    return (

        <div>
    <button onClick={()=>{console.log(diceHistory[0].total)}}>console log</button>
    {diceHistory.map((results)=>
        <li>{results.rolls.length}D{results.D} + {results.mod} = {results.total} ({results.rolls.map((roll, i)=><text>{roll}, </text>)})</li>
    )}
    <button onClick={()=>{setDiceHistory([])}}>Clear History</button>
    <button onClick={()=>{setShowHistory(false)}}>X</button>
        </div>

    )}
