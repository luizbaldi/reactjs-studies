import axios from 'axios';

export const FETCH_POSTS  = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const FETCH_POST   = 'FETCH_POST';
export const DELETE_POST  = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=bucket';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export function createPost(values, success) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => success());

  return {
    type: CREATE_POSTS,
    payload: request
  };
};

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
};

export function deletePost(id, success) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => success());

  return {
    type: DELETE_POST,
    payload: id
  }
}