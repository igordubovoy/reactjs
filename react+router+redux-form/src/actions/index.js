import axios from 'axios'

const ROOR_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=idubovoy123'

export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'

export function fetchPosts () {
  const request = axios.get(`${ROOR_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function addPost (values, callback) {
  const request = axios.post(`${ROOR_URL}/posts${API_KEY}`, values)
    .then(() => callback())

  return {
    type: ADD_POST,
    payload: request
  }
}

export function fetchPost (id) {
  const request = axios.get(`${ROOR_URL}/posts/${id}${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost (id, callback) {
  axios.delete(`${ROOR_URL}/posts/${id}${API_KEY}`)
    .then(() => callback())

  return {
    type: DELETE_POST,
    payload: id
  }
}
