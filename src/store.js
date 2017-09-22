import {createStore} from 'redux'
import reduces from './reducers/index';


const middleware = window.devToolsExtension && window.devToolsExtension();
const store = createStore(reduces, {}, middleware);

export default store;
