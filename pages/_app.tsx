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
      </Container>
    );
  }
}

export default MyApp;
