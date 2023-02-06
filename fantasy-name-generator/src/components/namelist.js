import React, {useState} from 'react'

export function NameList ({result}) {

    const [nameArr, setNameArr] = useState([]);

    function handleClick (result){
        
        setNameArr((result)=>[result, ...nameArr])

    };

    return (
        <div>
            <button onClick={()=>{handleClick()}}>Save name</button>
            <p>{nameArr}</p>
        </div>
        
    )
}