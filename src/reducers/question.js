import { ASK_A_QUESTION } from '../actions/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case ASK_A_QUESTION:
      return payload

    default:
      return state
  }
}
