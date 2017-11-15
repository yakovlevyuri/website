import React from 'react';

import Layout from '../src/components/layout/Layout';
import Info from '../src/components/info/Info';

export default () => (
  <Layout>
    <div className="wrapper">
      <Info name="Yuri Yakovlev" position="Full Stack Javascript Developer" />
    </div>

    <style jsx>{`
      .wrapper {
        max-width: 70%;
        align-self: center;
        text-align: center;
      }
    `}</style>
  </Layout>
);
