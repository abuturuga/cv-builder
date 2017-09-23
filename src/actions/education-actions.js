export const ADD_EDUCATION = 'ADD_EDUCATION';
export const REMOVE_EDUCATION= 'REMOVE_EDUCATION';

export const addEducation = payload => {
  return {type: ADD_EDUCATION, payload};
};

export const removeEducation = payload => {
  return {type: REMOVE_EDUCATION, payload};
};
