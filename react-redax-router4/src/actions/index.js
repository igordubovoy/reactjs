import axios from 'axios'

const ROOR_URL = 'http://reduxblog.herokuapp.com/api/posts'
const API_KEY = 'idubovoy123'
export const FETCH_POSTS = 'FETCH_POSTS'

export function fetchPosts() {
  const url = `${ROOR_URL}?key=${API_KEY}`
  const request = axios.get(url)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
