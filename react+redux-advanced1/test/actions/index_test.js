import { expect } from '../test_helper'
import { SAVE_COMMENT } from '../../src/actions/types'
import { saveComment } from '../../src/actions'

describe('actions', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      expect(saveComment().type).to.equal(SAVE_COMMENT)
    })

    it('has the correct payload', () => {
      expect(saveComment('new comment').payload).to.equal('new comment')
    })
  })
})
