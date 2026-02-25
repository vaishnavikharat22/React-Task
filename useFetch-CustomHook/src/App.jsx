import React from 'react'
import { useFetch } from './useFetch';
import { useState } from 'react';

const App = () => {
  const [currentPost, setcurrentPost] = useState(1)
  const {data} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);
  return (
    <div>
      <button onClick={()=>setcurrentPost(1)}>1</button>
        <button onClick={()=>setcurrentPost(2)}>2</button>
        <button onClick={()=>setcurrentPost(3)}>3</button>
      <h1>{data.title}</h1>
    </div>
  )
}

export default App