import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({user:'shivang' , age:20})
  const btnclicked=()=>{
       const newNum={...num}
       newNum.user='sarvang'
       newNum.age='22'
       setnum(newNum)
  }
  return (
    <div>
<h1>{num.user},{num.age} </h1>
<button onClick={btnclicked}>clicked</button>
    </div>
  )
}

export default App