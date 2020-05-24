import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_SEARCH_USERS_TEXT,
  CLEAR_SEARCH_USERS_TEXT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_SEARCH_USERS_TEXT:
      return {
        ...state,
        searchUsersText: action.payload
      };
    case CLEAR_SEARCH_USERS_TEXT:
      return {
        ...state,
        searchUsersText: ''
      };
    default:
      return state;
  }
};
