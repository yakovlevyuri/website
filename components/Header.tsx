import { logEvent } from '../utils/analytics';
import Link from './Link';

const Header = () => (
  <>
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
  </>
);

export default Header;
