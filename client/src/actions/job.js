import { POST_ERROR, ADD_JOB, GET_JOBS } from './types';
import axios from 'axios';
import { setAlert } from './alert';

// Get jobs
export const getJobs = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/jobs');

    dispatch({
      type: GET_JOBS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add job
export const addJob = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/jobs/', formData, config);

    dispatch({
      type: ADD_JOB,
      payload: res.data,
    });

    dispatch(setAlert('Job Created', 'success'));

    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
