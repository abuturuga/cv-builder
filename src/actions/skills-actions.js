export const ADD_SKILL = 'ADD_SKILL';
export const REMOVE_SKILL = 'REMOVE_SKILL';

export const addSkill = payload => {
  return {type: ADD_SKILL, payload}
};

export const removeSkill = payload => {
  return {type: REMOVE_SKILL, payload}
};
