import React from 'react';
import ReactDOM from 'react-dom';
import EditorContainer from './components/Editor/EditorContainer';
import Header from './components/header/Header';
import Downloads from './components/downloads/Downloads';

main();

function main() {
  ReactDOM.render(<Header />, document.getElementById('header'));
  ReactDOM.render(<EditorContainer url="data.json" />, document.getElementById('editor'));
  ReactDOM.render(<Downloads />, document.getElementById('downloads'));
}
