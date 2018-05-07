// @flow

import * as React from 'react';

import { initGA, logPageView } from '../utils/analytics';
import Meta from './meta';

type Props = {
  children?: React.Node,
};

class Layout extends React.Component<Props> {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Meta />

        <div className="home">{this.props.children}</div>

        <style jsx>{`
          .home {
            top: -60px;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Layout;
