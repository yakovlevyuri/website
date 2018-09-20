import App, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import * as React from 'react';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

import Layout from '../src/components/Layout';

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>

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
          }

          @media screen and (max-width: 820px) {
            body {
              margin: 10px;
            }
          }

          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #4290f7;
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #4290f7, 0 0 5px #4290f7;
            opacity: 1;
            transform: rotate(3deg) translate(0px, -4px);
          }
        `}</style>
      </Container>
    );
  }
}

export default MyApp;
