import React, { Component } from 'react';

import '../common/assets/styles/modules/downloads.css';

export default class Downloads extends Component {
  render() {
    return (
      <div className="download-cv">
        <h2>Download My Résumé</h2>
        <ul>
          <li>
            <a
              href="cv/yakovlev-yuri-en.pdf"
              target="_blank"
              className="disabled"
              rel="noopener noreferrer"
            >
              <span className="svg-icon svg-icon-gb" />English.js
            </a>
          </li>
          <li>
            <a
              href="cv/cz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="disabled"
            >
              <span className="svg-icon svg-icon-cz" />Czech.js
            </a>
          </li>
          <li>
            <a
              href="cv/ru.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="disabled"
            >
              <span className="svg-icon svg-icon-ru" />Russian.js
            </a>
          </li>
        </ul>
        <p>
          or find me on{' '}
          <a
            href="https://cz.linkedin.com/in/yakovlevyuri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="svg-icon svg-icon-linkedin" />LinkedIn
          </a>
        </p>
      </div>
    );
  }
}
