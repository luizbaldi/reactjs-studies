import React, { Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

/* components */
import Fallback from './components/Fallback'

/* lazy components */
const Fun = lazy(() => import('./components/Fun'))
const Nothing = lazy(() => import('./components/Nothing'))
const Potatoe = lazy(() => import('./components/Potatoe'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Suspense fallback={<Fallback />}>
            <Fun />
            <Nothing />
            <Potatoe />
          </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
