// @flow

import React, { Fragment } from 'react';

import { logEvent } from '../utils/analytics';
import Link from './link/Link';

const Footer = () => (
  <Fragment>
    <div className="footer">
      <p>
        Telegram:{' '}
        <Link
          url="https://t.me/yyakovlev"
          title="Contact me via telegram"
          label="@yyakovlev"
          newWindow
          onClick={() => logEvent('Link', 'Clicked', 'Contact via telegram')}
        />
      </p>
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

        &:first-child {
          margin-bottom: 10px;
        }
      }
    `}</style>
  </Fragment>
);

export default Footer;
