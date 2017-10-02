import React from 'react';
import PropTypes from 'prop-types';

export default class LangPanel extends React.Component {
  static propTypes = {
    changeLang: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._changeLang = this._changeLang.bind(this);
  }

  _changeLang(button) {
    const { changeLang } = this.props;

    changeLang(button.target.id);
  }

  render() {
    return (
      <div>
        <ul className="tabs-panel">
          <li>
            <a
              id="english"
              className="switcher"
              onClick={this._changeLang}
              title="in english"
            >
              english.js
            </a>
          </li>
          <li>
            <a
              id="russian"
              className="switcher"
              onClick={this._changeLang}
              title="по-русски"
            >
              russian.js
            </a>
          </li>
          <li>
            <a
              id="czech"
              className="switcher"
              onClick={this._changeLang}
              title="v češtině"
            >
              czech.js
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
