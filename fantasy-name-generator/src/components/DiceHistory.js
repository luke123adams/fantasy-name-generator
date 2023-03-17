import React, {useState, useEffect} from 'react'


export function DiceHistory ({diceHistory, setDiceHistory, setShowHistory, calculateSum}) {

    

    const reRollHistoric = (length, type, mod, index) => {
        let results = []

    
    for (let i = 0; i < length; i++) {
// console.log((Math.ceil(Math.random()*diceType)))
results.push((Math.ceil(Math.random()*type)));
    }
    let newTotal = calculateSum(results)
    setDiceHistory([
        ...diceHistory.slice(0, index), {
            D: type,
                rolls: results,
                mod: mod,
                total: newTotal+parseInt(mod)
        },
        ...diceHistory.slice(index+1)
    ])
    }

    const deleteRow = (index) => {
        setDiceHistory([
            ...diceHistory.slice(0, index),
            ...diceHistory.slice(index+1)
        ])
        
    }
    

    return (

        <div>
    <button onClick={()=>{console.log(diceHistory[0].total)}}>console log</button>
    {diceHistory.map((results, i)=>
        <li>{results.rolls.length}D{results.D} + {results.mod} = {results.total} ({results.rolls.map((roll)=><text>{roll}, </text>)}) <button onClick={()=>{reRollHistoric(results.rolls.length, results.D, results.mod, i)}}>Re-roll</button> <button onClick={()=>{deleteRow(i)}}>Delete roll</button></li>
    )}
    <button onClick={()=>{setDiceHistory([])}}>Clear History</button>
    <button onClick={()=>{setShowHistory(false)}}>X</button>
        </div>

    )}
