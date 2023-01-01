import React, {useState} from 'react'

export function DiceRoller(){

    const [randomNumber, setRandomNumber] = useState ("")

function getNumber(n){
setRandomNumber((Math.ceil(Math.random()*n)));
console.log(randomNumber)
}

return (
<div class="grid-container">
<button class="grid-item" onClick={()=>getNumber(100)}>Roll a d100</button>
<button class="grid-item" onClick={()=>getNumber(20)}>Roll a d20</button>
<button class="grid-item" onClick={()=>getNumber(12)}>Roll a d12</button>
<button class="grid-item" onClick={()=>getNumber(10)}>Roll a d10</button>
<button class="grid-item" onClick={()=>getNumber(8)}>Roll a d8</button>
<button class="grid-item" onClick={()=>getNumber(6)}>Roll a d6</button>
<button class="grid-item" onClick={()=>getNumber(4)}>Roll a d4</button>


<div class="grid-item">{}</div>
<text>{randomNumber}</text>
</div>
)
}