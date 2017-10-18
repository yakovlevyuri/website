import React, { Component } from 'react';
import injectSheet from 'react-jss';
/*import './components/common/assets/styles/front.css';*/

import HomePage from './pages/HomePage';

const styles = {
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      /*backgroundColor: 'black',*/
    },
  },
};

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <HomePage />
      </div>
    );
  }
}

export default injectSheet(styles)(App);
