import React from 'react';
import Loader from 'react-loader';
import Editor from './Editor';
import $ from 'jquery';

export default class EditorContainer extends React.Component {
  constructor(props) {
    super(props);
    this._loadBioFromServer = this._loadBioFromServer.bind(this);
    this._changeLang = this._changeLang.bind(this);
    this.state = {
      loaded: false,
      data: [],
      lang: 'english',
    };
  }

  componentDidMount() {
    this._loadBioFromServer();
  }

  _loadBioFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({
          data: data,
          loaded: true,
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString()); // eslint-disable-line no-console
      }.bind(this),
    });
  }

  _changeLang(lang) {
    console.log(lang);
    this.setState({
      lang: lang,
    });
  }

  render() {
    return (
      <div className="editor">
        <div className="top-bar">
          <a href="#" class="top-bar-button" />
        </div>

        <div className="tabs-panel">
          <div className="lang-switcher">
            <a className="switcher" onClick={this._changeLang.bind(this, 'english')} title="in english">
              english.css
            </a>
          </div>
          <div className="lang-switcher">
            <a className="switcher" onClick={this._changeLang.bind(this, 'russian')} title="по-русски">
              russian.css
            </a>
          </div>
          <div className="lang-switcher">
            <a className="switcher" onClick={this._changeLang.bind(this, 'czech')} title="v češtině">
              czech.css
            </a>
          </div>
        </div>

        <div className="css">
        <Loader loaded={this.state.loaded}>
          <Editor data={this.state.data} lang={this.state.lang} />
        </Loader>
        </div>

        <div className="bottom-bar" />
      </div>
    );
  }
}