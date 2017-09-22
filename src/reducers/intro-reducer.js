import {SET_INTRO} from '../actions/intro-actions';

const defaultState = {
  firstName: '',
  lastName: '',
  headLine: '',
  summary: ''
};

export default (state = defaultState, action) => {
  if (typeof action === 'undefined') {
    throw new Error('An action must be provided');
  }

  switch (action.type) {
    case SET_INTRO:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
