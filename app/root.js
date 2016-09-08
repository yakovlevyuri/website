import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import { rootStore, } from './configureStore';
import EditorContainer from './components/Editor/EditorContainer';
import Header from './components/header/Header';
import Downloads from './components/downloads/Downloads';

main();

function main() {
  ReactDOM.render(<Header />, document.getElementById('header'));
  ReactDOM.render(
      <Provider store={rootStore}>
        <EditorContainer url="data.json" />
      </Provider>, document.getElementById('editor'));
  ReactDOM.render(<Downloads />, document.getElementById('downloads'));
}
