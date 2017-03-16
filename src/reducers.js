import { combineReducers } from 'redux-immutable';
import resume from './components/resume/ResumeReducer';

const rootReducer = combineReducers({
  resume,
});

export default rootReducer;
