import React from 'react';
import './components/common/assets/styles/front.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        {this.props.children}
      </div>
    );
  }
}

