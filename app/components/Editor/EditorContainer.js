import React from 'react';
import { connect, } from 'react-redux';
import {
  fetchJson,
} from './EditorActions';
import Loader from 'react-loader';
import Editor from './Editor';

export class EditorContainer extends React.Component {
  static propTypes = {
    editorJson: React.PropTypes.array,
    isLoaded: React.PropTypes.bool,
    isError: React.PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this._changeLang = this._changeLang.bind(this);
    this._init = this._init.bind(this);

    this.state = {
      lang: 'english',
    };
  }

  componentDidMount() {
    this._init();
  }

  static mapStateToProps(state) {
    return {
      editorJson: state.getIn(['editor', 'editorJson',]),
      isLoaded: state.getIn(['editor', 'isLoaded',]),
      isError: state.getIn(['editor', 'isError',]),
    };
  }

  static mapDispatchToProps(dispatch) {
    return {
      fetchJson: () => dispatch(fetchJson()),
    };
  }

  _init() {
    this.props.fetchJson();
  }

  _changeLang(lang) {
    this.setState({
      lang: lang,
    });
  }

  render() {
    const {
      editorJson,
      isLoaded,
    } = this.props;

    return (
      <div className="editor">
        <div className="top-bar">
          <a href="#" className="top-bar-button" />
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
          <Loader loaded={isLoaded}>
          <Editor data={editorJson} lang={this.state.lang} />
          </Loader>
        </div>

        <div className="bottom-bar" />
      </div>
    );
  }
}

export default connect(
  EditorContainer.mapStateToProps,
  EditorContainer.mapDispatchToProps,
)(EditorContainer);
