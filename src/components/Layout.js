// @flow

import * as React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

import { initGA, logPageView } from '../utils/analytics';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import config from '../../config';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

type Props = {|
  children?: React.Node,
|};

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

        <div className="wrapper">
          <Header />
          <div className="content">
            <React.Fragment>{this.props.children}</React.Fragment>
          </div>

          <Footer />
        </div>

        <style jsx global>{`
          *,
          :after,
          :before {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-smoothing: antialiased;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }

          html,
          body {
            font-size: 16px;
          }

          body {
            margin: 20px;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
              serif;

            @media screen and (max-width: 820px) {
              margin: 10px;
            }
          }
        `}</style>

        <style jsx>{`
          .wrapper {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(3, 1rf);
            grid-template-rows: 1fr 20fr 1fr;
            grid-template-areas:
              'header header header'
              '. content .'
              'footer footer footer';
            grid-auto-flow: dense;
            width: calc(100vw - 40px);
            height: calc(100vh - 40px);

            @media screen and (max-width: 820px) {
              grid-gap: 10px;
              grid-template-areas:
                'header header header'
                'content content content'
                'footer footer footer';
              width: calc(100vw - 20px);
              height: calc(100vh - 20px);
            }
          }

          .content {
            grid-area: content;
            text-align: center;
            align-self: center;
            justify-self: center;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Layout;
