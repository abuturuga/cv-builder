import {
  ADD_EXPERIENCE,
  EDIT_EXPERIENCE,
  REMOVE_EXPERIENCE
} from '../actions/experience-actions';


export default (state = [], action) => {
  if (typeof action === 'undefined') {
    throw new Error('An action must be provided');
  }

  switch (action.type) {
    case ADD_EXPERIENCE:
      return [...state, action.payload];
    case EDIT_EXPERIENCE: {
      const index = state.findIndex(item => item.id === action.payload.id);
      if(index === -1) return state;

      return state.map((item, i) => {
        if(i === index) return Object.assign({}, item, action.payload.field);

        return item;
      });
    }
    case REMOVE_EXPERIENCE: {
      const index = state.findIndex(item => item.id === action.payload.id);
      if(index === -1) return state;

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    }
    default:
      return state;
  }
};
