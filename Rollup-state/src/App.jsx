import React from 'react'
import { useState } from 'react'
const App = () => {

  return (
    <div>
      <Lightbulb/>
    </div>
  )
}

const Lightbulb = () => {
  const [bulbon, setbulbon] = useState(true)
  return(
    <div>
      <Bulbon bulbon= {bulbon}></Bulbon>
      <Bulbonoff setbulbon = {setbulbon}></Bulbonoff>
    </div>
  )
}

const Bulbon = ({bulbon}) => {
  return(
    <div>
      {bulbon ? "Bulb on" : "Bulb off"}
    </div>
  )
}

const Bulbonoff = ({setbulbon}) => {

  const onoff = () => {
    setbulbon(c => !c)
  }

  return(
  <button onClick={onoff}>Click</button>
  )
}
export default App