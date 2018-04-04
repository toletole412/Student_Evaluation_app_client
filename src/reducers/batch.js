import { FETCH_BATCH, ADD_STUDENT } from '../actions/types'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_BATCH:
      return payload

    case ADD_STUDENT:
      return [...state, payload]

    default:
      return state
  }
}
