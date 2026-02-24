import React from 'react'
import { useState } from 'react'

function useCounter() {
  const [count, setCount] = useState(0)

  function increaseCount(){
    setCount(count+1);
  }

  return {
    count: count,
    increaseCount: increaseCount
  }
}

function Counter() {
  const {count, increaseCount} = useCounter()

  return(
    <div>
    <button onClick={increaseCount}>click {count}</button>
  </div>
  )
 
}

const App = () => {

  return (
    <div>
     <Counter/>
    </div>
  )
}

export default App