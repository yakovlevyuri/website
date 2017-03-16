import React from 'react';
import { Route, IndexRoute }  from 'react-router';
import App from './App';
import HomePage from './pages/HomePage';
import SomeAnotherPage from './pages/CreateEventPage';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={HomePage} />
    <Route component={SomeAnotherPage} path='somepage' />
  </Route>
);
