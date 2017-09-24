import {createStore} from 'redux'
import reduces from './reducers/index';

const loremIpsun = number => Array(number).fill(0).map(i => 'Lorem ipsun').join(', ');

const fakeData = {
  intro: {
    firstName: 'John',
    lastName: 'Doe',
    headLine: 'Front End Developer',
    summary: loremIpsun(17)
  },
  contact: {
    address: loremIpsun(3),
    phone: '0742760135',
    skype: 'john.doe1',
    email: 'john.doe@gmail.com',
    linkedIn: 'http://linkedIn.com/en/john.doe'
  },
  skills: ['JavaScript', 'React.Js', 'HTML', 'CSS', 'HTML5', 'Angular.js '],
  experience: [
    {
      id: 1,
      firm: loremIpsun(1),
      position: 'Front End Developer',
      address: loremIpsun(1),
      start: new Date(),
      end: new Date(),
      description: loremIpsun(17)
    }
  ],
  education: [
    {
      id: 0,
      school: loremIpsun(1),
      degree: loremIpsun(1),
      field: loremIpsun(1),
      start: 2012,
      end: 2014,
      description: loremIpsun(17)
    }
  ]
}

const middleware = window.devToolsExtension && window.devToolsExtension();
const store = createStore(reduces, fakeData, middleware);
export default store;
