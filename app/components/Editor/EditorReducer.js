import {handleActions,} from 'redux-actions';
import Immutable from 'immutable';
import {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  REMOVE_PILOT_ARTICLE,
  ADD_PILOT_ARTICLE,
  SORT_PILOT_ARTICLE,
  REMOVE_AVAILABLE_ARTICLE,
  ADD_AVAILABLE_ARTICLE,
  POST_ARTICLES_ORDER,
  RECEIVE_ARTICLES_ORDER,
} from './PilotActions';
const POST_ARTICLE_STATE_ENUM = {
  DEFAULT:'',
  SUCCESS:'success',
  ERROR:'error',
  LOADING:'loading',
};
const pilot = handleActions({
  [REMOVE_PILOT_ARTICLE]: (state, action) => {
    let pilotArticles = state.get('pilotArticles');
    pilotArticles.splice(action.payload.index, 1);
    return state.withMutations(newState =>
      newState
        .setIn(['pilotArticles'], pilotArticles)
    );
  },
  [ADD_PILOT_ARTICLE]: (state, action) => {
    let pilotArticles = state.get('pilotArticles');
    pilotArticles.splice(action.payload.index, 0, action.payload.article);
    return state.withMutations(newState =>
      newState
        .setIn(['pilotArticles'], pilotArticles)
    );
  },
  [SORT_PILOT_ARTICLE]: (state, action) => {
    let pilotArticles = state.get('pilotArticles');
    let article = pilotArticles.splice(action.payload.from, 1)[0];
    pilotArticles.splice(action.payload.to, 0, article);
    return state.withMutations(newState =>
      newState
        .setIn(['pilotArticles'], pilotArticles)
    );
  },
  [REMOVE_AVAILABLE_ARTICLE]: (state, action) => {
    let availableArticles = state.get('availableArticles');
    availableArticles.splice(action.payload.index, 1);
    return state.withMutations(newState =>
      newState
        .setIn(['availableArticles'], availableArticles)
    );
  },
  [ADD_AVAILABLE_ARTICLE]: (state, action) => {
    let availableArticles = state.get('availableArticles');
    availableArticles.splice(action.payload.index, 0, action.payload.article);
    return state.withMutations(newState =>
      newState
        .setIn(['availableArticles'], availableArticles)
    );
  },
  [REQUEST_ARTICLES]: (state) => {
    return state.withMutations(newState =>
      newState
        .setIn(['isLoaded'], false)
        .setIn(['isError'], false)
    );
  },
  [RECEIVE_ARTICLES]: {
    next(state, action) {
      return state.withMutations(newState => {
          newState
            .setIn(['isLoaded'], true)
            .setIn(['isError'], false)
            .setIn(['pilotArticles'], action.payload ? action.payload.slice(0, 5).map((item) => item.uuid) : {})
            .setIn(['availableArticles'], action.payload ? action.payload.slice(5, action.payload.length).map((item) => item.uuid) : {});
          if (action.payload) {
            action.payload.forEach(item => newState.setIn(['articles', item.uuid], item));
          }
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
  [POST_ARTICLES_ORDER]: (state) => {
    return state.withMutations(newState => {
        newState
          .setIn(['postArticleState'], POST_ARTICLE_STATE_ENUM.LOADING)
      }
    );
  },
  [RECEIVE_ARTICLES_ORDER]: {
    next(state) {
      return state.withMutations(newState => {
          newState
            .setIn(['postArticleState'], POST_ARTICLE_STATE_ENUM.SUCCESS)
        }
      );
    },
    throw(state) {
      return state.withMutations(newState =>
        newState
          .setIn(['postArticleState'], POST_ARTICLE_STATE_ENUM.ERROR)
      );
    },
  }
}, Immutable.fromJS({
  isLoaded: false,
  isError: false,
  postArticleState: POST_ARTICLE_STATE_ENUM.DEFAULT,
}));

export default pilot;
