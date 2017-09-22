import {SET_CONTACT} from '../actions/contact-actions';

const defaultState = {
  address: '',
  phone: '',
  skype: '',
  email: '',
  linkedIn: ''
};

export default (state = defaultState, action) => {
  if (typeof action === 'undefined') {
    throw new Error('An action must be provided');
  }

  switch (action.type) {
    case SET_CONTACT:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
