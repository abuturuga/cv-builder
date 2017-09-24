import {combineReducers} from 'redux'
import intro from './intro-reducer';
import contact from './contact-reducer';
import skills from './skills-reducer';
import experience from './experience-reducer';
import education from './education-reducer';


export default combineReducers({
  intro,
  contact,
  skills,
  experience,
  education
});
