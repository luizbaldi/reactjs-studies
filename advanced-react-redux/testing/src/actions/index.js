import { SAVE_COMMENT } from './types'

export const saveComment = (comment = '') => ({
  type: SAVE_COMMENT,
  payload: comment
})
