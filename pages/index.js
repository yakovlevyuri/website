// @flow

import React from 'react';

import Layout from '../src/components/Layout';
import Info from '../src/components/info/Info';
/*import Editor from '../src/components/editor/Editor';*/

const IndexPage = () => (
  <Layout>
    <Info name="Yuri Yakovlev" position="Full Stack Javascript Developer" />
    {/*<Editor />*/}

    <style jsx>{`
      .home2 {
        top: -60px;
        width: 100%;
        height: 100%;
        display: flex;
        overflow: hidden;
        // position: absolute;
        align-items: center;
        justify-content: center;
      }

      .wrapper1 {
        max-width: 70%;
        align-self: center;
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
