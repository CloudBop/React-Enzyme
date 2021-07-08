import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [counter, setCounter] = useState(0)
  const [noBelowZero, setNoBelowZero] = useState(false)

  const dec = () => {

    if (counter === 0) {
      setNoBelowZero(true)
    }
    setCounter(prev => prev === 0 ? 0 : prev - 1)


  }
  return (
    <div
      className="App"
      data-test="component-app"
    >
      <h1 data-test="counter-display">The counter is currently, <span data-test="count" >{counter}</span> </h1>
      <button onClick={() => {
        setNoBelowZero(false)
        setCounter(prev => prev + 1)
      }
      } data-test="increment-btn">increment</button>
      <button onClick={() => dec()} data-test="decrement-btn">decrement</button>
      {noBelowZero ? <span data-test="warning-msg">The counter cannot go below zero</span> : null}
    </div>
  )
}


export default App;
