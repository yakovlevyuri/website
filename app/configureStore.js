import Immutable from 'immutable';
import { createStore, applyMiddleware, } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const initialState = new Immutable.Map();
export const rootStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware
  )
);