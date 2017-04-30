import { combineReducers } from 'redux-immutable';
import editor from './components/editor/EditorReducer';

const rootReducer = combineReducers({
  editor,
});

export default rootReducer;
