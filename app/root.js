import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import { rootStore, } from './configureStore';
import Header from './header/Header';
import EditorContainer from './editor/EditorContainer';
import Downloads from './downloads/Downloads';
import './assets/styles/front.scss';

main();

function main() {
  ReactDOM.render(<Header />, document.getElementById('header'));
  ReactDOM.render(
      <Provider store={rootStore}>
        <EditorContainer url="data.json" />
      </Provider>, document.getElementById('editor'));
  ReactDOM.render(<Downloads />, document.getElementById('downloads'));
}
