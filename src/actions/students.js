import * as request from 'superagent'
import { FETCH_BATCHES, FETCH_BATCH, ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from './types'

const baseUrl = 'http://localhost:4000'

export const fetchBatches = () => (dispatch) => {
  request
    .get(`${baseUrl}/batches`)
    .then(result => {
      dispatch({
        type: FETCH_BATCHES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const fetchOneBatch = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/batches/${id}`)
    .then(result => {
      dispatch({
        type: FETCH_BATCH,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const addStudent = (student, batchId) => (dispatch) => {
  request
    .post(`${baseUrl}/students/${batchId}`)
    .send(student)
    .then(response => dispatch({
      type: ADD_STUDENT,
      payload: response.body
    }))
}

// export const login = (email, password) => (dispatch) =>
//   request
//     .post(`${baseUrl}/logins`)
//     .send({email, password})
//     .then(result => {
//       dispatch({
//         type: TEACHER_LOGIN_SUCCESS,
//         payload: result.body
//       })
//     })
//     .catch(err => {
//       if (err.status === 400) {
//         dispatch({
//           type: TEACHER_LOGIN_FAILED,
//           payload: err.response.body.message || 'Unknown error'
//         })
//       }
//       else {
//         console.error(err)
//       }
//     })
