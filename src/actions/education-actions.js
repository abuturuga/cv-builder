export const ADD_EDUCATION = 'ADD_EDUCATION';
export const EDIT_EDUCATION = 'EDIT_EDUCATION';
export const REMOVE_EDUCATION= 'REMOVE_EDUCATION';

export const addEducation = payload => ({type: ADD_EDUCATION, payload});
export const editEducation = payload => ({type: EDIT_EDUCATION, payload});
export const removeEducation = payload => ({type: REMOVE_EDUCATION, payload});
