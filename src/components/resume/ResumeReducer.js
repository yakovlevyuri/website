import { handleActions } from 'redux-actions'
import Immutable from 'immutable'
import {
  REQUEST_JSON,
  RECEIVE_JSON,
  CHANGE_LANG,
} from './ResumeActions';

const POST_ARTICLE_STATE_ENUM = {
  DEFAULT: '',
  SUCCESS: 'success',
  ERROR: 'error',
  LOADING: 'loading'
};

const resume = handleActions({
  [REQUEST_JSON]: (state) => {
    return state.withMutations(newState =>
      newState
        .setIn(['isLoaded' ], false)
        .setIn(['isError' ], false)
    )
  },
  [RECEIVE_JSON]: {
    next (state, action) {
      return state.withMutations(newState => {
        newState
          .setIn(['isLoaded' ], true)
          .setIn(['isError' ], false)
          .setIn(['editorJson' ], action.payload)
        }
      )
    },
    throw (state) {
      return state.withMutations(newState =>
        newState
          .setIn(['isLoaded' ], false)
          .setIn(['isError' ], true)
      )
    }
  },
  [CHANGE_LANG]: (state, action) => {
    return state.withMutations(newState =>
      newState
        .setIn(['lang' ], action.payload)
    )
  },
}, Immutable.fromJS({
  isLoaded: false,
  isError: false,
  lang: 'russian',
  postArticleState: POST_ARTICLE_STATE_ENUM.DEFAULT,
}));

export default resume;
