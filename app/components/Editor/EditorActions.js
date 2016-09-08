import {createAction,} from 'redux-actions';
import api from '../api';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

export const REMOVE_PILOT_ARTICLE = 'REMOVE_PILOT_ARTICLE';
export const ADD_PILOT_ARTICLE = 'ADD_PILOT_ARTICLE';
export const SORT_PILOT_ARTICLE = 'SORT_PILOT_ARTICLE';
export const REMOVE_AVAILABLE_ARTICLE = 'REMOVE_AVAILABLE_ARTICLE';
export const ADD_AVAILABLE_ARTICLE = 'ADD_AVAILABLE_ARTICLE';

export const POST_ARTICLES_ORDER = 'POST_ARTICLES_ORDER';
export const RECEIVE_ARTICLES_ORDER = 'RECEIVE_ARTICLES_ORDER';

export const requestArticles = createAction(REQUEST_ARTICLES);
export const receiveArticles = createAction(RECEIVE_ARTICLES);

export const removePilotArticle = createAction(REMOVE_PILOT_ARTICLE);
export const addPilotArticle = createAction(ADD_PILOT_ARTICLE);
export const sortPilotArticle = createAction(SORT_PILOT_ARTICLE);
export const removeAvailableArticle = createAction(REMOVE_AVAILABLE_ARTICLE);
export const addAvailableArticle = createAction(ADD_AVAILABLE_ARTICLE);

export const postArticlesOrder = createAction(POST_ARTICLES_ORDER)
export const receiveArticlesOrder = createAction(RECEIVE_ARTICLES_ORDER)

export const fetchArticles = () => {
  return (dispatch) => {
    dispatch(requestArticles());
    return api.get('').then(
      (response) => dispatch(receiveArticles(
        response.data.articles || response,
      )),
      (error) => dispatch(receiveArticles(
        error,
      ))
    );
  };
};

export const sendArticles = (pilotArticles) => {
  return (dispatch) => {
    dispatch(postArticlesOrder());
    return api.post('', {
      create: pilotArticles && pilotArticles.length ? pilotArticles.map((it) => {
        return {
          uuid: it
        }
      }) : []
    }).then(
      (response) => dispatch(receiveArticlesOrder(response)),
      (error)=> dispatch(receiveArticlesOrder(error))
    )
  }
};
