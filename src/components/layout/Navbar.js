import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Navbar extends Component {
  static defaultProps = {
    title: 'GitHub finder',
    icon: ['fab', 'github']
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    const { title, icon } = this.props;
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <FontAwesomeIcon icon={icon} />
          {title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
