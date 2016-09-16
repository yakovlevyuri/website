import { handleActions, } from 'redux-actions';
import Immutable from 'immutable';
import {
  REQUEST_JSON,
  RECEIVE_JSON,
} from './EditorActions';

const POST_ARTICLE_STATE_ENUM = {
  DEFAULT:'',
  SUCCESS:'success',
  ERROR:'error',
  LOADING:'loading',
};

const editor = handleActions({
  [REQUEST_JSON]: (state) => {
    return state.withMutations(newState =>
      newState
        .setIn(['isLoaded',], false)
        .setIn(['isError',], false)
    );
  },
  [RECEIVE_JSON]: {
    next(state, action) {
      return state.withMutations(newState => {
          newState
            .setIn(['isLoaded',], true)
            .setIn(['isError',], false)
            .setIn(['editorJson',], action.payload)
        }
      );
    },
    throw(state) {
      return state.withMutations(newState =>
        newState
          .setIn(['isLoaded',], false)
          .setIn(['isError',], true)
      );
    },
  },
}, Immutable.fromJS({
  isLoaded: false,
  isError: false,
  postArticleState: POST_ARTICLE_STATE_ENUM.DEFAULT,
}));

export default editor;
