import { combineReducers, } from 'redux-immutable';
import editor from './editor/EditorReducer';

const rootReducer = combineReducers({
  editor,
});

export default rootReducer;
