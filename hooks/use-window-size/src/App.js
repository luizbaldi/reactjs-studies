import React from 'react'
import logo from './logo.svg'
import './App.css'
import useWindowSize from './hooks/useWindowSize'

const App = () => {
  const { width, height } = useWindowSize()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Window width: {width}</p>
        <p>Window height: {height}</p>
      </header>
    </div>
  )
}

export default App
