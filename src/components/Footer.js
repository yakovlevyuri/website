// @flow

import React, { Fragment } from 'react';

const Footer = () => (
  <Fragment>
    <div className="footer">
      <p>Website works until the last visitor leaves</p>
    </div>

    <style jsx>{`
      .footer {
        padding: 20px;
        grid-area: footer;
        grid-column-start: 2;
      }

      p {
        font-size: 0.7em;
        text-align: center;
      }
    `}</style>
  </Fragment>
);

export default Footer;
