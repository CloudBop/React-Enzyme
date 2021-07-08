import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div
      className="App"
      data-test="component-app"
    >
      <h1 data-test="counter-display">The counter is currently, <span data-test="count" >0</span> </h1>
      <button data-test="increment-btn">increment</button>

    </div>
  )
}


export default App;
