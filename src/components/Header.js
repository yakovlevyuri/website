// @flow

import React, { Fragment } from 'react';

import { logEvent } from '../utils/analytics';
import Link from './link/Link';

const Header = () => (
  <Fragment>
    <div className="header">
      <span>
        (
        <Link
          url="https://github.com/yakovlevyuri/website"
          title="Source code on Github"
          label="src"
          newWindow
          onClick={() => logEvent('Link', 'Clicked', 'Source code on Github')}
        />)
      </span>
    </div>

    <style jsx>{`
      .header {
        padding: 20px;
        text-align: right;
        grid-area: header;
        grid-column-start: 3;
      }
    `}</style>
  </Fragment>
);

export default Header;
