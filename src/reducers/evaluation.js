import { DO_EVALUATION, EDIT_EVALUATION, FETCH_EVALUATION } from '../actions/types'

export default (state = {}, { type, payload }) => {
  switch (type) {

    case DO_EVALUATION:
      return [...state, payload]

    case EDIT_EVALUATION:
      return [...state, payload]

    case FETCH_EVALUATION:
      return payload

    default:
      return state
  }
}
