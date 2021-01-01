import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const JobItem = ({
  job: {
    _id,
    user,
    name,
    avatar,
    title,
    company,
    location,
    description,
    requirements,
    email,
  },
}) => {
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <h4>{location}</h4>
        <p className='my-1'>{description}</p>
        <p className='post-date'>{requirements}</p>
        <h6>Send a message at {email} for more details!</h6>
      </div>
    </div>
  );
};

JobItem.defaultProps = {
  showActions: true,
};

JobItem.propTypes = {
  job: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(JobItem);
