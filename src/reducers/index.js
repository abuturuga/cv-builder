import {combineReducers} from 'redux'
import intro from './intro-reducer';
import contact from './contact-reducer';
import skills from './skills-reducer';


export default combineReducers({
  intro,
  contact,
  skills
});
