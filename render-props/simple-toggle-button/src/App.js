import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* components */
import Toggle from './components/Toggle'
import AnotherToggle from './components/AnotherToggle'

class App extends Component {
  render() {
    return (
      <div className="App" style={style.container}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Joking around with Render Props :)</h1>
        </header>
        <div style={style.togglesContainer}>
          <Toggle
            render={(isOn, onToggle) => (
              <div style={style.toggleContainer}>
                <h4 style={style.toggleLabelContainer}>
                  Toggle made using render props
                </h4>
                <div style={style.labelContainer}>
                  Is ON:
                  {isOn
                    ? <span style={style.onLabel}> Yup</span>
                    : <span style={style.offLabel}> Nope</span>
                  }
                </div>
                <div>
                  <button onClick={onToggle} style={style.button}>Toggle Visibility</button>
                </div>
                <div>
                  <button onClick={onToggle} style={style.button}>Another button using the same method reference</button>
                </div>
              </div>
            )}
          />
          <AnotherToggle>
            {(isOn, onToggle) => (
              <div style={style.toggleContainer}>
                <h4 style={style.toggleLabelContainer}>
                  Toggle made using function as children
                </h4>
                <div style={style.labelContainer}>
                  Is ON:
                  {isOn
                    ? <span style={style.onLabel}> Yup</span>
                    : <span style={style.offLabel}> Nope</span>
                  }
                </div>
                <div>
                  <button onClick={onToggle} style={style.button}>Toggle Visibility</button>
                </div>
                <div>
                  <button onClick={onToggle} style={style.button}>Another button using the same method reference</button>
                </div>
              </div>
            )}
          </AnotherToggle>
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    textAlign: 'center'
  },
  togglesContainer: {
    display: 'flex'
  },
  toggleContainer: {
    flex: 1,
    alignItems: 'center'
  },
  labelContainer: {
    margin: '12px'
  },
  onLabel: {
    color: 'green'
  },
  offLabel: {
    color: 'grey'
  },
  button: {
    padding: 12,
    margin: '12px 0',
    fontSize: '1em',
    borderRadius: 4
  },
  toggleLabelContainer: {
    margin: '24px',
  }
}

export default App;
