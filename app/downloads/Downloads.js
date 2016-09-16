import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="download-cv">
        <h2>Download My Résumé</h2>
        <ul>
          <li>
            <a href="cv/yakovlev-yuri-en.pdf" target="_blank">
              <span className="svg-icon svg-icon-gb" />English.css
            </a>
          </li>
          <li>
            <a href="cv/cz.pdf" target="_blank" className="disabled">
              <span className="svg-icon svg-icon-cz" />Czech.css
            </a>
          </li>
          <li>
            <a href="cv/ru.pdf" target="_blank" className="disabled">
              <span className="svg-icon svg-icon-ru" />Russian.css
            </a>
          </li>
        </ul>
        <p>or find me on <a href="https://cz.linkedin.com/in/yakovlevyuri" target="_blank"><span
          className="svg-icon svg-icon-linkedin" />LinkedIn</a></p>
      </div>
    );
  }
}