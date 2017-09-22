import {combineReducers} from 'redux'
import intro from './intro-reducer';
import contact from './contact-reducer';

export default combineReducers({
  intro,
  contact
});
