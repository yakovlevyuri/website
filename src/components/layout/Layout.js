import React, { Fragment } from 'react';

import Meta from '../meta';

export default ({ children }) => (
  <Fragment>
    <Meta />

    <div className="home">{children}</div>

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
  </Fragment>
);
