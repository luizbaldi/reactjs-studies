/* global describe, it, beforeEach */
import { renderComponent } from '../testHelper'
import { expect } from 'chai'
import App from '../../src/components/App'

describe('App', () => {
  let component
  beforeEach(() => {
    component = renderComponent(App)
  })

  it('should have comment box class', () => {
    expect(component.find('.comment-box')).to.exist
  })

  it('should have comment list class', () => {
    expect(component.find('.comment-list')).to.exist
  })
})
