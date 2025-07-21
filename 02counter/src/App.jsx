import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 let [counter, setCount] = useState(0)
//  let counter = 5;

 const addValue = () => {
  counter++;
  setCount(counter);
  console.log("Counter after addition: ", counter);
 }
  const subtractValue = () => {
  counter--;
  setCount(counter);
  console.log("Counter after subtraction: ", counter);
 }
  return (
    <>
    <h1>Counter App</h1>
    <h2>Welcome to the Counter App</h2>
    <p>Counter: {counter}</p>
    <button className="btn"
      onClick={addValue}
    >Add Value {counter}</button>
    
    <button className="btn"
    onClick={subtractValue}
    >Remove Value {counter}</button>
    </>
  )
}

export default App
