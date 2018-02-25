/* global describe, it, beforeEach */
import { renderComponent } from '../testHelper'
import { expect } from 'chai'
import CommentBox from '../../src/components/CommentBox'

describe('CommentBox', () => {
  let component

  beforeEach(() => {
    component = renderComponent(CommentBox)
  })

  it('should have a text area', () => {
    expect(component.find('textarea')).to.exist
  })

  it('should have a button', () => {
    expect(component.find('button')).to.exist
  })

  it('should have comment-box class', () => {
    expect(component).to.have.class('comment-box')
  })

  describe('text inputs', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment')
    })

    it('should show text after input', () => {
      expect(component.find('textarea')).to.have.value('new comment')
    })

    it('should clear input when submitted', () => {
      component.simulate('submit')
      expect(component.find('textarea')).to.have.value('')
    })
  })
})
