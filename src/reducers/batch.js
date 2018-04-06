import { FETCH_BATCH, ADD_STUDENT, CREATE_BATCH , DELETE_STUDENT } from '../actions/types'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_BATCH:
      return payload

    case CREATE_BATCH:
      return [...state, payload]

    case ADD_STUDENT:
      return [...state, payload]

  
    case DELETE_STUDENT:
      return [...state, payload]

    default:
      return state
  }
}
