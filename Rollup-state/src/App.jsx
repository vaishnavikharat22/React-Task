import React, { createContext, useContext } from 'react'
import { useState } from 'react'

const Bulbcontext = createContext();

const App = () => {
  const [bulbon, setbulbon] = useState(true)

  return (
    <div>
      <Bulbcontext.Provider value={{
        bulbon: bulbon,
        setbulbon:setbulbon
      }}>
        <Lightbulb/>
      </Bulbcontext.Provider>
      
    </div>
  )
}

const Lightbulb = () => {
  return(
    <div>
      <Bulbon></Bulbon>
      <Bulbonoff></Bulbonoff>
    </div>
  )
}

const Bulbon = () => {
  const { bulbon } = useContext(Bulbcontext);
  return(
    <div >
      <img style={{height:200,width:200}} src={bulbon ? "https://www.shutterstock.com/shutterstock/photos/792745633/display_1500/stock-vector-bright-glowing-incandescent-light-bulb-on-a-white-background-792745633.jpg" 
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuzqMrax_TxNQORfOCyju9tQuB1D9tj10pQ&s"} ></img>
    </div>
  )
}

const Bulbonoff = () => {

  const { setbulbon } = useContext(Bulbcontext);
  const onoff = () => {
    setbulbon(c => !c)
  }

  return(
  <button onClick={onoff}>Click</button>
  )
}
export default App