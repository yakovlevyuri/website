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
          title="Yuri Yakovlev - Full Stack JavaScript Developer"
          description="Yuri is a JavaScript anarchist. He doesn't move tickets in Jira
            and make mistakes in Pull Requests on purpose just to test colleagues."
          keywords="Personal website, Javascript, React.js, Redux, Apollo Client, GraphQL, Node.js"
          ogTitle="Yuri Yakovlev - Full Stack JavaScript Developer"
          ogType="website"
          ogUrl="https://yakovlevyuri.com/"
          ogImage="https://yakovlevyuri.com/static/images/meta.jpg"
          ogDescription="Yuri is a JavaScript anarchist. He doesn't move tickets in Jira
            and make mistakes in Pull Requests on purpose just to test colleagues."
          viewport="width=device-width, initial-scale=1, shrink-to-fit=no"
          faviconUrl="/static/images/favicon.ico"
        />

        <div className="home">{this.props.children}</div>

        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font: 13px Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
              serif;
            height: 100%;
          }

          a {
            color: #22bad9;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        `}</style>

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
