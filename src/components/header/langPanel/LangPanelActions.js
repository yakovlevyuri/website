import { createAction } from 'redux-actions';
import { api, instagram } from '../api';

export const REQUEST_JSON = 'REQUEST_JSON';
export const RECEIVE_JSON = 'RECEIVE_JSON';

export const requestJson = createAction(REQUEST_JSON);
export const receiveJson = createAction(RECEIVE_JSON);

export const fetchJson = () => {
  return dispatch => {
    dispatch(requestJson());

    return api
      .get('data.json')
      .then(
        response => dispatch(receiveJson(response.data)),
        error => dispatch(receiveJson(error)),
      );
  };
};

export const getInstagramImages = () => {
  return dispatch => {
    return instagram.get('').then(
      response => {
        console.log(response);
        return response.data;
      },
      error => {
        console.log(error);
        return error;
      },
    );
  };
};

export const changeLang = () => {
  return dispatch => {
    dispatch(requestJson());

    return api
      .get('data.json')
      .then(
        response => dispatch(receiveJson(response.data)),
        error => dispatch(receiveJson(error)),
      );
  };
};
