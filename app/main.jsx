import React from 'react';
import ReactDOM from 'react-dom';
import EditorContainer from './components/Editor/EditorContainer.jsx';

main();

function main() {
	ReactDOM.render(<EditorContainer url="data.json" />, document.getElementById('app'));
}
