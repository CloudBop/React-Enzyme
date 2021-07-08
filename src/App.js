import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0)
  return (
    <div
      className="App"
      data-test="component-app"
    >
      <h1 data-test="counter-display">The counter is currently, <span data-test="count" >{counter}</span> </h1>
      <button onClick={() => setCounter(prev => prev + 1)} data-test="increment-btn">increment</button>

    </div>
  )
}


export default App;
