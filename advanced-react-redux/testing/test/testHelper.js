import { jsdom } from 'jsdom' // toDo: Upgrade jsom version alter on
import jquery from 'jquery'
import { renderIntoDocument, Simulate } from 'react-addons-test-utils'
import React from 'react'
import ReactDOM from 'react-dom'
import chai from 'chai'
import chaiJquery from 'chai-jquery'

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'

// Set up testing environment to simulate DOM
const html = '<!doctype html><html><body></body></html>'
global.document = jsdom(html)
global.window = global.document.defaultView
const $ = jquery(global.window)

// Set up chai-jquery
chaiJquery(chai, chai.util, $)

// Build 'renderComponent' helper that should render a given react class
const renderComponent = (ComponentClass, props = {}, state = {}) => {
  const componentInstance = renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  )

  return $(ReactDOM.findDOMNode(componentInstance))
}

// Build helper for simulating events
$.fn.simulate = (eventName, value) => {
  if (value) {
    this.val(value)
  }
  Simulate[eventName](this[0])
}

export { renderComponent }
