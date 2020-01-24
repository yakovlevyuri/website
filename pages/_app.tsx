import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { AppPropsType } from 'next/dist/next-server/lib/utils';

import Layout from '../components/Layout';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppPropsType) => (
  <>
    <Head>
      <title>
        Hi, my name is Yuri and I'm a Full Stack JavaScript Developer
      </title>
    </Head>

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
  </>
);

export default MyApp;
