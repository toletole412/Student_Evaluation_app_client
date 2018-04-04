import * as request from 'superagent'

import { TEACHER_LOGIN_SUCCESS } from './types'
import { TEACHER_LOGIN_FAILED } from './types'
import { TEACHER_LOGOUT } from './types'

const baseUrl = 'http://localhost:4000'

export const login = (email, password) => (dispatch) =>
  request
    .post(`${baseUrl}/logins`)
    .send({email, password})
    .then(result => {
      dispatch({
        type: TEACHER_LOGIN_SUCCESS,
        payload: result.body
      })
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: TEACHER_LOGIN_FAILED,
          payload: err.response.body.message || 'Unknown error'
        })
      }
      else {
        console.error(err)
      }
    })

  export const logout = () => {
    console.log("logout")
      return {
        type: TEACHER_LOGOUT
      }
  }
