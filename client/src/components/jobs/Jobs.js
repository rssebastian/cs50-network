import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import JobItem from './JobItem';
import { getJobs } from '../../actions/job';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Jobs = ({ getJobs, job: { jobs, loading } }) => {
  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Jobs</h1>
      <p className='lead'>
        <FontAwesomeIcon icon={faUser} /> Good luck finding a job!
      </p>
      <div className='jobs'>
        {jobs.map((job) => (
          <JobItem key={job._id} job={job} />
        ))}
      </div>
    </Fragment>
  );
};

Jobs.propTypes = {
  getJobs: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.job,
});

export default connect(mapStateToProps, { getJobs })(Jobs);
