export const ADD_SKILL = 'ADD_SKILL';
export const REMOVE_SKILL = 'REMOVE_SKILL';

export const addSkill = payload => ({type: ADD_SKILL, payload});
export const removeSkill = payload => ({type: REMOVE_SKILL, payload});
