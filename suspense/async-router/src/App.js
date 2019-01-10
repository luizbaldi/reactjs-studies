import React, { lazy, Suspense } from 'react';
import './App.css';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';

/* components */
import Fallback from './components/Fallback'

/* lazy components */
const Fun = lazy(() => import('./components/Fun'))
const Nothing = lazy(() => import('./components/Nothing'))
const Potatoe = lazy(() => import('./components/Potatoe'))

const App = () => (
  <BrowserRouter>
    <>
      <header className='app-header'>
        <nav>
          <Link className='app-link' to='/'>Home</Link>
          <Link className='app-link' to='/fun'>Fun</Link>
          <Link className='app-link' to='/nothing'>Nothing</Link>
          <Link className='app-link' to='/potatoe'>Potatoe</Link>
        </nav>
      </header>
      <div className='content'>
        <Suspense fallback={Fallback}>
          <Switch>
            <Route exact path='/'>
              <span>
                This is an async react-router with Suspense example :)
              </span>
            </Route>
            <Route path='/fun'>
              <Fun />
            </Route>
            <Route path='/nothing'>
              <Nothing />
            </Route>
            <Route path='/potatoe'>
              <Potatoe />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </>
  </BrowserRouter>
)

export default App;
