import React from 'react'

const App = () => {

  return (
    <div>
      <h1>hello shivang</h1>
      <input onClick={function(){
        console.log("Input pr click hua hai ");
        
      }} type="text" placeholder='ENTER THE NAME' />
    </div>
  )
}

export default App