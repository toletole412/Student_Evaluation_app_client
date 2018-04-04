import { FETCH_BATCHES } from '../actions/types'

export default (state=[], { type, payload }) => {
  switch (type) {
    case FETCH_BATCHES:
      return payload

    default:
      return state
  }
}
