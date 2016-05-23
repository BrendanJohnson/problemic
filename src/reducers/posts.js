import {
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST
} from '../actions';

export default function posts(state, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    case 'CREATE_POST':
      return state
    case 'DELETE_POST':
      return state
    default:
      return state || []
  }
}
