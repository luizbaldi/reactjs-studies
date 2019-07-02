import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

/*
  personal notes
  - every change on hook state will fire all effects (useEffect)
  - cleanup effect is called only after first re-render
  - hooks are so fucking amazing that you can optimize the effect
    passing an array as second argument! (this is REALLY awesome)
*/

function useCounter(name = 'default') {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`Counter ${name} effect started`)

    return () => {
      console.log(`Cleanup ${name} effect fired`)
    }
  }, [count])

  return [count, setCount]
}

const App = () => {
  const [count, setCount] = useCounter('primary')
  const [secondaryCount, setSecondaryCounter] = useCounter('secondary')
  const [input, setInputValue] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple durp examples with react hooks
        </p>
        <div className="counter-container">
          <div className="counter">
            <p>
              Primary Counter: {count}
            </p>
            <button
              onClick={() => setCount(count + 1)}
              type='button'
            >
              Increment
            </button>
          </div>
          <div className="counter">
            <p>Secondary Counter: {secondaryCount}</p>
            <button
              onClick={() => setSecondaryCounter(secondaryCount + 1)}
              type='button'
            >
              Increment
            </button>
          </div>
        </div>
        <p>
          Controlled input example. You typed: {input}
        </p>
        <input
          type="text"
          value={input}
          placeholder='Type random things here'
          onChange={e => setInputValue(e.target.value)}
        />
      </header>
    </div>
  )
}

export default App
