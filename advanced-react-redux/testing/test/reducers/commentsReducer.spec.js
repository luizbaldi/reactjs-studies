/* global describe, it */
import { expect } from 'chai'
import commentReducer from '../../src/reducers/commentsReducer'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments reducer', () => {
  it('should handle action with unknown type', () => {
    expect(commentReducer([], {})).to.be.instanceOf(Array)
  })

  it('should handle action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' }
    expect(commentReducer([], action)).to.eql(['new comment'])
  })
})
