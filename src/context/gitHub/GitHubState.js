import React, { useReducer } from 'react';
import axios from 'axios';
import GitHubContext from './gitHubContext';
import GitHubReducer from './gitHubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_SEARCH_USERS_TEXT,
  CLEAR_SEARCH_USERS_TEXT
} from '../types';

let gitHubClientId;
let gitHubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  gitHubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  gitHubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  gitHubClientId = process.env.GITHUB_CLIENT_ID;
  gitHubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GitHubState = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    searchUsersText: ''
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  // Search Users
  const searchUsers = async _ => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${state.searchUsersText}&client_id=${gitHubClientId}&client_secret=${gitHubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // Get User
  const getUser = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${gitHubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get User Repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${gitHubClientId}&client_secret=${gitHubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  // Clear Users
  const clearUsers = _ => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = _ => dispatch({ type: SET_LOADING });

  // Set Search Users Text
  const setSearchUsersText = text =>
    dispatch({ type: SET_SEARCH_USERS_TEXT, payload: text });

  // Clear Search Users Text
  const clearSearchUsersText = _ => dispatch({ type: CLEAR_SEARCH_USERS_TEXT });

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsersText: state.searchUsersText,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
        setSearchUsersText,
        clearSearchUsersText
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
