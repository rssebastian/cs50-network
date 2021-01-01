import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addJob } from '../../actions/job';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AddJob = ({ addJob, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: '',
    email: '',
  });

  const {
    title,
    company,
    location,
    description,
    requirements,
    email,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addJob(formData, history);
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>List a New Job</h1>
      <p className='lead'>
        <FontAwesomeIcon icon={faUser} /> Please list the job details below
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>What position are you hiring for?</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Company'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>What's the name of your company?</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='A short description of the position'
            name='description'
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className='form-text'>
            Tell us a little about the position
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Job Requirements'
            name='requirements'
            value={requirements}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please include an email addres where people can message for more
            details!
          </small>
        </div>

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddJob.propTypes = {
  addJob: PropTypes.func.isRequired,
};

export default connect(null, { addJob })(withRouter(AddJob));
