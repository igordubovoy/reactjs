import { SAVE_COMMENT } from '../actions/types'

export default function (state = [], action) {
  switch (SAVE_COMMENT) {
    case action.type:
      return [...state, action.payload]
    default:
      return state
  }
}
