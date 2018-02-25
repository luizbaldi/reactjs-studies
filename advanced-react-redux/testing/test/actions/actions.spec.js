/* global describe, it */
import { expect } from 'chai'
import { SAVE_COMMENT } from '../../src/actions/types'
import { saveComment } from '../../src/actions'

describe('actions', () => {
  describe('saveComment ', () => {
    it('should have the correct type', () => {
      const action = saveComment()
      expect(action.type).to.equal(SAVE_COMMENT)
    })

    it('should have the correct payload', () => {
      const action = saveComment('new comment')
      expect(action.payload).to.equal('new comment')
    })
  })
})
