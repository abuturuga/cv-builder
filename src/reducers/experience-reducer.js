import {
  ADD_EXPERIENCE,
  REMOVE_EXPERIENCE
} from '../actions/experience-actions';


export default (state = [], action) => {
  if (typeof action === 'undefined') {
    throw new Error('An action must be provided');
  }

  switch (action.type) {
    case ADD_EXPERIENCE:
      return state;
    case REMOVE_EXPERIENCE:
      return state;
    default:
      return state;
  }
};
