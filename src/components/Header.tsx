import React, { Fragment } from 'react';

import { logEvent } from '../utils/analytics';
import Link from './post/Link';

const Header = () => (
  <Fragment>
    <div className="header">
      <p>
        (
        <Link
          url="https://github.com/yakovlevyuri/website"
          title="Source code on Github"
          label="source code"
          newWindow
          onClick={() => logEvent('Link', 'Clicked', 'Source code on Github')}
        />
        )
      </p>
    </div>

    <style jsx>{`
      .header {
        padding: 10px;
        text-align: right;
        grid-area: header;
      }

      p {
        font-size: 0.8em;
      }
    `}</style>
  </Fragment>
);

export default Header;
