import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function achanging(){
    console.log("a ki value change");
    
  }

  function bchanging(){
    console.log("b ki value change");
    
  }
  useEffect(function () {
    console.log("useeffect is running");
    
  } [a,b])
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b} </h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>Change b</button>
    </div>

  )
}

export default App