import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AlertContext from '../../context/alert/alertContext';

const Alert = _ => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <FontAwesomeIcon icon='info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
