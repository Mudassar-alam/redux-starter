import { combineReducers } from 'redux';
import bugReducer from './Bugs';
import projectReducer from './Projects';

export default  combineReducers({
    bugs:bugReducer,
    projects:projectReducer,

});