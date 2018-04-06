import { GET_YELLOW } from '../actions/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case GET_YELLOW:
      return payload

    default:
      return state
  }
}
