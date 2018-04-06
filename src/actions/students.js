import * as request from 'superagent'
import { FETCH_BATCHES, FETCH_BATCH, CREATE_BATCH,
  ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT,FETCH_STUDENT,
  DELETE_EVALUATION, DO_EVALUATION,EDIT_EVALUATION, FETCH_EVALUATION,
  ASK_A_QUESTION,  GET_RED, GET_YELLOW, GET_GREEN
   } from './types'

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

export const createBatch = (batch) => (dispatch) => {
  request
    .post(`${baseUrl}/batches`)
    .send(batch)
    .then(response => dispatch({
      type: CREATE_BATCH,
      payload: response.body
    }))
}


export const addStudent = (student, batchId) => (dispatch) => {
  request
    .post(`${baseUrl}/${batchId}/student/new`)
    .send(student)
    .then(response => dispatch({
      type: ADD_STUDENT,
      payload: response.body
    }))
}

export const editStudent = (student, studentId) => (dispatch) => {
  request
    .put(`${baseUrl}/students/${studentId}/edit`)
    .send(student)
    .then(response => dispatch({
      type: EDIT_STUDENT,
      payload: response.body
    }))
}

export const deleteStudent = (studentId) => (dispatch) => {
  request
    .delete(`${baseUrl}/students/${studentId}/delete`)
    .send(studentId)
    .then(response => dispatch({
      type: DELETE_STUDENT,
      payload: response.body
    }))
}

export const deleteEvaluation = (evaluationId) => (dispatch) => {
  request
    .delete(`${baseUrl}/evaluation/${evaluationId}/delete`)
    .send(evaluationId)
    .then(response => dispatch({
      type: DELETE_EVALUATION,
      payload: response.body
    }))
}

export const editEvaluation = (evaluation, evaluationId) => (dispatch) => {
  request
    .put(`${baseUrl}/students/${evaluationId}/evaluation/edit`)
    .send(evaluation)
    .then(response => dispatch({
      type: EDIT_EVALUATION,
      payload: response.body
    }))
}

export const doEvaluation = (evaluation, studentId) => (dispatch) => {
  request
    .post(`${baseUrl}/students/${studentId}/evaluation`)
    .send(evaluation)
    .then(response => dispatch({
      type: DO_EVALUATION,
      payload: response.body
    }))
}

export const fetchOneEvaluation = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/evaluation/${id}`)
    .then(result => {
      dispatch({
        type: FETCH_EVALUATION,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const fetchOneStudent = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/students/${id}`)
    .then(result => {
      dispatch({
        type: FETCH_STUDENT,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const askQuestion = (batchId) => (dispatch) => {
  request
    .get(`${baseUrl}/batch/${batchId}/ask`)
    .then(result => {
      dispatch({
        type: ASK_A_QUESTION,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const getRedP = (batchId) => (dispatch) => {
  request
    .get(`${baseUrl}/${batchId}/redP`)
    .then(result => {
      dispatch({
        type: GET_RED,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const getGreenP = (batchId) => (dispatch) => {
  request
    .get(`${baseUrl}/${batchId}/greenP`)
    .then(result => {
      dispatch({
        type: GET_GREEN,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const getYellowP = (batchId) => (dispatch) => {
  request
    .get(`${baseUrl}/${batchId}/yellowP`)
    .then(result => {
      dispatch({
        type: GET_YELLOW,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
