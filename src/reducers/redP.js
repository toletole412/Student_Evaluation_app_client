import { GET_RED } from '../actions/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case GET_RED:
      return payload

    default:
      return state
  }
}
