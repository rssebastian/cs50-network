import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NotFound = (props) => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </h1>
      <p className='large'>Sorry, this page does not exist</p>
    </Fragment>
  );
};

export default NotFound;
