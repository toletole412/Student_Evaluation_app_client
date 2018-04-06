import { GET_GREEN } from '../actions/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case GET_GREEN:
      return payload

    default:
      return state
  }
}
