import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ name, position }) => (
  <div>
    <img className="avatar" src="/static/images/avatar@2x.jpg" alt="Avatar" />
    <h1 className="h1">{name}</h1>
    <h2 className="h2">{position}</h2>
    <p>
      Live in Prague, work at&nbsp;
      <a
        href="https://kiwi.com"
        title="Kiwi.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kiwi.com
      </a>
    </p>
    <p>
      Download My Résumé in{' '}
      <a
        href="/static/cv/yakovlev-yuri.pdf"
        target="_blank"
        className="disabled"
        rel="noopener noreferrer"
      >
        JSON
      </a>{' '}
      format<br />or find me on{' '}
      <a
        href="https://cz.linkedin.com/in/yakovlevyuri"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </p>

    <style jsx>{`
      h1.h1 {
        font-size: 14px;
        font-weight: normal;
      }
      h2.h2 {
        color: #a5acb0;
        font-size: 13px;
        font-weight: normal;
      }
      .avatar {
        width: 120px;
        height: 120px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2),
          inset 0 2px 0 rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);

Info.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Info;
