import React, { useContext } from 'react';
//import PropTypes from 'prop-types';
import GitHubContext from '../../context/gitHub/gitHubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = _ => {
  const {
    users,
    searchUsersText,
    searchUsers,
    clearUsers,
    setSearchUsersText,
    clearSearchUsersText
  } = useContext(GitHubContext);
  const { setAlert } = useContext(AlertContext);

  const onSubmit = e => {
    e.preventDefault();

    if (searchUsersText === '') {
      setAlert('Please enter something', 'light');
      return;
    }

    searchUsers();
  };

  const onChange = e => {
    setSearchUsersText(e.target.value);
  };

  const onClearButtonClick = _ => {
    clearUsers();
    clearSearchUsersText();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={searchUsersText}
          onChange={onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={onClearButtonClick}
        >
          Clear
        </button>
      )}
    </div>
  );
};

// Search.propTypes = {
//   searchUsers: PropTypes.func.isRequired,
//   clearUsers: PropTypes.func.isRequired,
//   showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired
// };

export default Search;
