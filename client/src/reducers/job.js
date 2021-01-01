// This file is the profileReducer that will determine how the state should be changed based on the action dispatched
// If a profile was successfully found and passed to this reducer, it will be added to the state

import { POST_ERROR, ADD_JOB, GET_JOBS } from '../actions/types';

const initialState = {
  job: null,
  jobs: [],
  loading: true,
  error: {},
};

export default function jobReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_JOB:
      return {
        ...state,
        jobs: [payload, ...state.jobs],
        loading: false,
      };
    case GET_JOBS:
      return {
        ...state,
        jobs: payload,
        loading: false,
      };
    default:
      return state;
  }
}
