import React from 'react'
import { useState,useRef } from 'react'

const App = () => {

const [counter, setcounter] = useState(0);

  const count = useRef(0);

const inputRef = useRef(null);

const focus = () => {
 
  inputRef.current.focus();
   count.current += 1;
  setcounter(count.current);
}
  return (
    <div>
      <h1>{counter}</h1>
      <input ref={inputRef} type='text'></input>
      <button onClick={focus}>Click me</button>
    </div>
  )
}



export default App