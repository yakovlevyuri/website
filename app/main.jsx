import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor/Editor.jsx';

main();

function main() {
	ReactDOM.render(<Editor url="data.json" />, document.getElementById('app'));
}