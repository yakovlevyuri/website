// @flow

import * as React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

import { initGA, logPageView } from '../utils/analytics';
import Meta from './Meta';
import config from '../../config';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

type Props = {
  children?: React.Node,
};

class Layout extends React.Component<Props> {
  componentDidMount() {
    if (config.NODE_ENV === 'production') {
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
        <Meta
          description="Yuri Yakovlev &ndash; Full Stack JavaScript Developer based in Prague, Czechia"
          keywords="personal website, frontend developer, javascript, Czechia, Prague"
        />

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
