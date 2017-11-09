import React, { Component } from 'react';
import injectSheet from 'react-jss';
/*import './components/common/assets/styles/front.css';*/

import HomePage from './pages/HomePage';

const styles = {
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    body: {
      height: '100%',
      font: `13px Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono,
        Courier New, monospace, serif`,
    },
    a: {
      color: '#22BAD9',
      '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
    },
  },
};

class App extends Component {
  render() {
    return <HomePage />;
  }
}

export default injectSheet(styles)(App);
