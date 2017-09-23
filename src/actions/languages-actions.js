export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const REMOVE_LANGUAGE = 'REMOVE_LANGUAGE';

export const addLanguage = payload => ({type: ADD_LANGUAGE, payload});
export const removeLanguage = payload => ({type: REMOVE_LANGUAGE, payload});
