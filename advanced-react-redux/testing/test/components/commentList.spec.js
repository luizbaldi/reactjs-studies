/* global describe, it, beforeEach */
import { expect } from 'chai'
import { renderComponent } from '../testHelper'
import CommentList from '../../src/components/CommentList'

describe('CommentList', () => {
  let component

  beforeEach(() => {
    const props = { comments: ['New comment', 'Other new comment'] }
    component = renderComponent(CommentList, null, props)
  })

  it('should show an <li> for each comment', () => {
    expect(component.find('li').length).to.equal(2)
  })

  it('should each comment be shown', () => {
    expect(component).to.contain('New comment')
    expect(component).to.contain('Other new comment')
  })
})
