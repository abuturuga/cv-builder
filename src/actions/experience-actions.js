export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const EDIT_EXPERIENCE = 'EDIT_EXPERIENCE';
export const REMOVE_EXPERIENCE = 'REMOVE_EXPERIENCE';

export const addExperience = payload => ({type: ADD_EXPERIENCE, payload});
export const editExperience = payload => ({type: EDIT_EXPERIENCE, payload});
export const removeExperience = payload => ({type: REMOVE_EXPERIENCE, payload});
