import {
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST
} from './types';

const INITIAL_POSTS = { 1: 'Test' }

export function fetchPosts() {
  console.log('running fetchposts action')
  return {
    type: FETCH_POSTS,
    payload: INITIAL_POSTS
  }
}
