import { combineReducers, } from 'redux-immutable';
import editor from './components/Editor/EditorReducer';

const rootReducer = combineReducers({
  editor,
});

export default rootReducer;
