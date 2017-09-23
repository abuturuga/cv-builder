import {ADD_SKILL, REMOVE_SKILL} from '../actions/skills-actions';


export default (state = [], action) => {
  if (typeof action === 'undefined') {
    throw new Error('An action must be provided');
  }

  switch (action.type) {
    case ADD_SKILL:
      return [...state, action.payload];
    case REMOVE_SKILL:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
};
