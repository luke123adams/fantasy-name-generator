import React, {useState} from "react";

const [randomNumber, setRandomNumber] = useState("")

export default function useRNG(n){

  setRandomNumber(Math.ceil(Math.random * n));
  return randomNumber
}