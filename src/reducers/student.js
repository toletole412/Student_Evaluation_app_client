import { FETCH_STUDENT, EDIT_STUDENT } from '../actions/types'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_STUDENT:
      return payload

    case EDIT_STUDENT:
      return [...state, payload]

    default:
      return state
  }
}
