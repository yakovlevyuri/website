// @flow

import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import ReactGA from 'react-ga';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Meta extends Component<null> {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(process.env.GA_TRACKING_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }

  render() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.GA_TRACKING_ID);
    return (
      <Fragment>
        <Head>
          <title>Yuri Yakovlev &ndash; Full Stack JavaScript Developer</title>
          <meta
            name="description"
            content="Yuri Yakovlev &ndash; Full Stack JavaScript Developer based in Prague, Czechia"
          />
          <meta
            name="keywords"
            content="Yuri Yakovlev, personal website, frontend developer, javascript, Czech Republic, Prague"
          />
          <meta property="og:site_name" content="https://yakovlevyuri.com" />
          <meta
            property="og:title"
            content="Yuri Yakovlev's homepage on the internet"
          />
          <meta
            property="og:description"
            content="Full Stack JavaScript Developer based in Prague, Czechia"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yakovlevyuri.com/" />
          <meta
            property="og:image"
            content="https://yakovlevyuri.com/static/images/meta.jpg"
          />
          <meta property="fb:admins" content="1118014257" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/static/images/favicon.ico" />
        </Head>

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
      </Fragment>
    );
  }
}

export default Meta;
