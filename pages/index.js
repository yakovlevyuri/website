// @flow

import React from 'react';

import Layout from '../src/components/Layout';
import Info from '../src/components/info/Info';

const IndexPage = () => (
  <Layout>
    <div className="home">
      <div className="wrapper">
        <Info name="Yuri Yakovlev" position="Full Stack Javascript Developer" />
      </div>
    </div>

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

      .wrapper {
        max-width: 70%;
        align-self: center;
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
