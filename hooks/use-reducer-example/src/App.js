import React, { Component, useReducer } from 'react'
import logo from './logo.svg'
import './App.css'

const initialState = {
  counter: 0
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'increment':
      return { counter: state.counter + 1 }
    case 'decrement':
      return { counter: state.counter - 1 }
    case 'clear':
      return { counter: 0 }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        Potatoe counter with useReducer
        <p><i>(total overkill but it's just for study purposes so yea why not)</i></p>
        <hr className="divider" />
        <p>Number of potatoes: {state.counter}</p>
        <button className='button' onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button className='button' onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button className='button' onClick={() => dispatch({ type: 'clear' })}>Clear</button>
      </div>
    </div>
  )
}

export default App
