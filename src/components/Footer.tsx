import React, { Fragment } from 'react';

const Footer = () => (
  <Fragment>
    <div className="footer">
      <p>
        {new Date().getFullYear()}. Website works until the last visitor leaves
      </p>
    </div>

    <style jsx>{`
      .footer {
        padding: 10px;
        grid-area: footer;
      }

      p {
        font-size: 0.7em;
        text-align: center;
      }

      p:first-child {
        margin-bottom: 10px;
      }
    `}</style>
  </Fragment>
);

export default Footer;
