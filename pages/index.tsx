import { NextPage } from 'next';

import Link from '../components/Link';

const IndexPage: NextPage = () => (
  <>
    <img className="photo" src="/images/photo.jpg" alt="Yuri Yakovlev photo" />
    <h1 className="h1">Yuri Yakovlev</h1>
    <h2 className="h2">Senior Full Stack Javascript Developer</h2>
    <p>
      Live in Prague, work at&nbsp;
      <Link
        url="https://www.oaks-lab.com"
        title="OAK'S LAB"
        label="OAK'S LAB"
        newWindow
      />
    </p>
    <p>
      Download My Résumé in{' '}
      <Link
        url="/cv/yakovlev-yuri.pdf"
        title="My Résumé in JSON response"
        label="JSON"
        newWindow
      />{' '}
      format
      <br />
      or find me on{' '}
      <Link
        url="https://cz.linkedin.com/in/yakovlevyuri"
        title="LinkedIn"
        label="LinkedIn"
        newWindow
      />
    </p>

    <style jsx>{`
      h1.h1 {
        font-size: 1em;
        font-weight: normal;
      }

      h2.h2 {
        color: #a5acb0;
        font-size: 0.9em;
        font-weight: normal;
      }

      p {
        font-size: 0.9em;
      }

      .photo {
        width: 120px;
        height: 120px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2),
          inset 0 2px 0 rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        margin-bottom: 10px;
      }
    `}</style>
  </>
);

export default IndexPage;
