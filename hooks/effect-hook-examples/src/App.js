import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const [secondaryCount, setSecondaryCounter] = useState(0)
  const [input, setInputValue] = useState('')

  useEffect(() => {
    /* notice that every change on hook state will fire useEffect */
    /* 'Effect fired' log is called on first render (like componentDidMount) */
    console.log('Effect fired')

    return () => {
      /* notice that cleanup effect is called only after first re-render */
      console.log('Cleanup effect fired')
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple durp examples with react hooks
        </p>
        <div className="counter-container">
          <div className="counter">
            <p>Primary Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
          <div className="counter">
            <p>Secondary Counter: {secondaryCount}</p>
            <button onClick={() => setSecondaryCounter(secondaryCount + 1)}>Increment</button>
          </div>
        </div>
        <p>
          Controlled input example. You typed: {input}
        </p>
        <input
          type="text"
          value={input}
          placeholder='Type random things here'
          onChange={(e) => setInputValue(e.target.value)}
        />
      </header>
    </div>
  )
}

export default App
