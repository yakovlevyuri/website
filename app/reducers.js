import { combineReducers, } from 'redux-immutable';
import pilot from './home/PilotReducer';

const rootReducer = combineReducers({
  pilot,
});

export default rootReducer;
